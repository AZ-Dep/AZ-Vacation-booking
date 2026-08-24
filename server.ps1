$port = 8000
$dir = $PSScriptRoot
if ([string]::IsNullOrEmpty($dir)) {
    $dir = Get-Location
}
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Output "PowerShell Web Server started on http://localhost:$port/"
Write-Output "Press Ctrl+C to stop the server."

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $urlPath = $request.Url.LocalPath
        if ($urlPath -eq "/api/bookings") {
            $team = $request.QueryString["team"]
            $dbDir = Join-Path $dir ".sim_db"
            if (-not (Test-Path $dbDir)) {
                New-Item -ItemType Directory -Path $dbDir | Out-Null
            }
            $dbFile = Join-Path $dbDir "sim_operator_team_$team.json"

            if ($request.HttpMethod -eq "GET") {
                if (-not (Test-Path $dbFile)) {
                    $months = @("JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC")
                    $years = @(2026, 2027, 2028)
                    $dates = @("วันที่ 2-3-4-5", "วันที่ 8-9-10-11", "วันที่ 14-15-16-17", "วันที่ 20-21-22-23", "วันที่ 26-27-28-29")
                    $rows = @()
                    $rowNum = 2
                    foreach ($year in $years) {
                        foreach ($month in $months) {
                            $isFirst = $true
                            foreach ($dateRange in $dates) {
                                $cBooking = ""
                                if ($team -eq "A" -and $month -eq "JAN" -and $year -eq 2027 -and $dateRange -eq "วันที่ 2-3-4-5") {
                                    $cBooking = "SYO"
                                }
                                $rows += [PSCustomObject]@{
                                    rowNum = $rowNum
                                    month = if ($isFirst) { $month } else { "" }
                                    year = if ($isFirst) { $year } else { "" }
                                    dateRange = $dateRange
                                    concourseC = $cBooking
                                    concourseF = ""
                                }
                                $isFirst = $false
                                $rowNum++
                            }
                        }
                    }
                    $jsonStr = $rows | ConvertTo-Json -Depth 5
                    Set-Content -Path $dbFile -Value $jsonStr -Encoding utf8
                } else {
                    $jsonStr = Get-Content -Path $dbFile -Raw
                }
                $response.ContentType = "application/json; charset=utf-8"
                $bytes = [System.Text.Encoding]::UTF8.GetBytes($jsonStr)
                $response.ContentLength64 = $bytes.Length
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            }
            elseif ($request.HttpMethod -eq "POST") {
                $reader = New-Object System.IO.StreamReader($request.InputStream)
                $jsonStr = $reader.ReadToEnd()
                $reader.Close()
                Set-Content -Path $dbFile -Value $jsonStr -Encoding utf8
                
                $response.ContentType = "application/json; charset=utf-8"
                $resJson = '{"success":true}'
                $bytes = [System.Text.Encoding]::UTF8.GetBytes($resJson)
                $response.ContentLength64 = $bytes.Length
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            }
            $response.Close()
            continue
        }

        if ($urlPath -eq "/") {
            $urlPath = "/index.html"
        }

        # Resolve clean path
        $subPath = $urlPath.TrimStart('/')
        $filePath = Join-Path $dir $subPath

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $mimeType = switch ($ext) {
                ".html" { "text/html; charset=utf-8" }
                ".css" { "text/css; charset=utf-8" }
                ".js" { "application/javascript; charset=utf-8" }
                ".png" { "image/png" }
                ".jpg" { "image/jpeg" }
                ".jpeg" { "image/jpeg" }
                default { "application/octet-stream" }
            }

            $response.ContentType = $mimeType
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $errorMessage = "File not found: $urlPath"
            $bytes = [System.Text.Encoding]::UTF8.GetBytes($errorMessage)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        }
        $response.Close()
    }
} catch {
    Write-Error $_
} finally {
    $listener.Stop()
    $listener.Close()
}
