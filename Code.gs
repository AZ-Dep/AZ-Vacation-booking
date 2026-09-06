/**
 * AZ Vacation Booking Application - Server-Side Google Apps Script (Code.gs)
 * Spreadsheet ID: 1I3uAn9UI-bk7pEita5SNbCpyDHGjxQIJFcgBG9_62c0
 */

const SPREADSHEET_IDS = {
  "AZ Employee": "1I3uAn9UI-bk7pEita5SNbCpyDHGjxQIJFcgBG9_62c0",
  "Bookings": "1I3uAn9UI-bk7pEita5SNbCpyDHGjxQIJFcgBG9_62c0",
  "Vacation Table": "1I3uAn9UI-bk7pEita5SNbCpyDHGjxQIJFcgBG9_62c0"
};

/**
 * Web API Handler (doGet) - Supports GET requests with fallback
 */
function doGet(e) {
  if (e && e.parameter && e.parameter.action) {
    var action = e.parameter.action;
    try {
      var result;
      if (action === "loginUser") {
        result = loginUser(e.parameter.initialName, e.parameter.employeeNo);
      } else if (action === "fetchBookings") {
        result = fetchBookings(e.parameter.position, e.parameter.team, parseInt(e.parameter.monthIndex), parseInt(e.parameter.year));
      } else if (action === "getUserYearBookingCount") {
        result = getUserYearBookingCount(e.parameter.team, parseInt(e.parameter.year), e.parameter.initialName);
      } else if (action === "getUserBookingHistory") {
        result = getUserBookingHistory(e.parameter.team, e.parameter.initialName);
      } else if (action === "getRawSheetSummary") {
        var ss = getSpreadsheet("Vacation Table");
        var sheet = getSheetCaseInsensitive(ss, "Schedule 2027");
        if (!sheet) sheet = getSheetCaseInsensitive(ss, "ตารางการจองที่อยากให้โชว์ใน website");
        if (!sheet) sheet = ss.getSheets()[0];
        var lastRow = sheet.getLastRow();
        var vals = sheet.getRange(1, 1, Math.min(300, lastRow), 4).getValues();
        result = { lastRow: lastRow, vals: vals };
      } else if (action === "getAllBookingsHistory") {
        result = getAllBookingsHistory();
      } else if (action === "clearAllTableBookings") {
        result = clearAllTableBookings();
      } else if (action === "clearAllAdminBookings") {
        result = clearAllAdminBookings();
      } else if (action === "clearAdminBookings") {
        result = clearAdminBookings(e.parameter.team, e.parameter.month);
      } else if (action === "cancelBooking") {
        result = cancelBooking(
          e.parameter.position,
          e.parameter.team,
          parseInt(e.parameter.monthIndex),
          parseInt(e.parameter.year),
          e.parameter.dateRange,
          e.parameter.concourse,
          e.parameter.initialName,
          parseInt(e.parameter.rowNum)
        );
      } else if (action === "submitBooking") {
        result = submitBooking(
          e.parameter.position,
          e.parameter.team,
          parseInt(e.parameter.monthIndex),
          parseInt(e.parameter.year),
          e.parameter.dateRange,
          e.parameter.concourse,
          e.parameter.initialName,
          e.parameter.employeeEnglish,
          e.parameter.isBookedByAdmin === "true" || e.parameter.isBookedByAdmin === true
        );
      }
      return ContentService.createTextOutput(JSON.stringify({ success: true, data: result }))
          .setMimeType(ContentService.MimeType.JSON);
    } catch (err) {
      return ContentService.createTextOutput(JSON.stringify({ success: false, error: err.message }))
          .setMimeType(ContentService.MimeType.JSON);
    }
  }

  // Fallback to HTML Service if opened directly in Apps Script URL
  try {
    return HtmlService.createTemplateFromFile('index')
        .evaluate()
        .setTitle('AZ Vacation booking application')
        .addMetaTag('viewport', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no');
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ success: true, message: "AZ Vacation Booking API is running." }))
        .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Web API Handler (doPost)
 */
function doPost(e) {
  try {
    var postData = {};
    if (e && e.postData && e.postData.contents) {
      try {
        postData = JSON.parse(e.postData.contents);
      } catch(ex) {
        postData = e.parameter || {};
      }
    } else if (e && e.parameter) {
      postData = e.parameter;
    }

    var action = postData.action;
    var result;

    if (action === "submitBooking") {
      result = submitBooking(
        postData.position,
        postData.team,
        parseInt(postData.monthIndex),
        parseInt(postData.year),
        postData.dateRange,
        postData.concourse,
        postData.initialName,
        postData.employeeEnglish,
        postData.isBookedByAdmin
      );
    } else if (action === "cancelBooking") {
      result = cancelBooking(
        postData.position,
        postData.team,
        parseInt(postData.monthIndex),
        parseInt(postData.year),
        postData.dateRange,
        postData.concourse,
        postData.initialName,
        parseInt(postData.rowNum)
      );
    } else if (action === "clearAdminBookings") {
      result = clearAdminBookings(postData.team, postData.month);
    } else {
      throw new Error("Invalid action: " + action);
    }

    return ContentService.createTextOutput(JSON.stringify({ success: true, data: result }))
        .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: err.message }))
        .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Helper to include CSS or JS file content into HTML template
 */
function include(filename) {
  try {
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
  } catch (e) {
    return "/* Include error: " + filename + " not found */";
  }
}

/**
 * Helper to find and open a Spreadsheet by name or ID
 */
function getSpreadsheet(name) {
  if (SPREADSHEET_IDS[name]) {
    try {
      return SpreadsheetApp.openById(SPREADSHEET_IDS[name]);
    } catch(e) {
      Logger.log("Failed opening by ID for: " + name);
    }
  }
  return SpreadsheetApp.openById("1I3uAn9UI-bk7pEita5SNbCpyDHGjxQIJFcgBG9_62c0");
}

/**
 * Case-insensitive sheet getter
 */
function getSheetCaseInsensitive(ss, name) {
  var sheets = ss.getSheets();
  for (var i = 0; i < sheets.length; i++) {
    if (sheets[i].getName().toLowerCase() === name.toLowerCase()) {
      return sheets[i];
    }
  }
  return ss.getSheets()[0];
}

/**
 * Normalize date strings for 100% accurate matching (Extract numbers and dashes)
 */
function normalizeDateStr(str) {
  if (!str) return "";
  var matches = str.toString().match(/[\d\-]+/);
  return matches ? matches[0] : str.toString().replace(/\s+/g, "").toLowerCase();
}

/**
 * 1. LOGIN USER
 */
function loginUser(initialName, employeeNo) {
  if (!initialName || !employeeNo) {
    throw new Error("กรุณากรอกข้อมูลให้ครบถ้วน");
  }

  var cleanInitialInput = initialName.toString().trim().toLowerCase();
  var cleanEmpNoInput = employeeNo.toString().trim();

  // Admin Credentials check:
  // 1. admin / Admin@1423 or admin@1423 or 423110 or 502110
  // 2. AAF2 / Admin@1423 or admin@1423 or 331110
  var isPassAdmin = (cleanEmpNoInput.toLowerCase() === "admin@1423" || cleanEmpNoInput === "423110" || cleanEmpNoInput === "502110" || cleanEmpNoInput === "331110");
  if ((cleanInitialInput === "admin" && isPassAdmin) || (cleanInitialInput === "aaf2" && isPassAdmin)) {
    return {
      success: true,
      employeeNo: cleanEmpNoInput,
      initialName: initialName.toString().trim().toUpperCase(),
      employeeThai: "ผู้ดูแลระบบ (Admin)",
      employeeEnglish: "Administrator",
      position: "Admin",
      team: "A",
      concourse: "C",
      isAdmin: true
    };
  }

  var ss = getSpreadsheet("AZ Employee");
  var sheet = getSheetCaseInsensitive(ss, "Employee All Data");
  if (!sheet) sheet = getSheetCaseInsensitive(ss, "Employee");
  if (!sheet) sheet = ss.getSheets()[0];

  var lastRow = sheet.getLastRow();
  if (lastRow < 2) {
    throw new Error("ไม่มีข้อมูลพนักงานในระบบ");
  }

  var data = sheet.getRange(1, 1, lastRow, 7).getValues();

  for (var i = 1; i < data.length; i++) {
    var dbEmpNo = data[i][0] ? data[i][0].toString().trim() : "";
    var dbInitial = data[i][1] ? data[i][1].toString().trim().toLowerCase() : "";
    
    if (dbInitial === cleanInitialInput && dbEmpNo === cleanEmpNoInput) {
      return {
        success: true,
        employeeNo: data[i][0],
        initialName: data[i][1],
        employeeThai: data[i][2],
        employeeEnglish: data[i][3],
        position: data[i][4],
        team: data[i][5],
        concourse: data[i][6] || ""
      };
    }
  }
  
  throw new Error("รหัสพนักงาน หรือ Initial Name ไม่ถูกต้อง");
}

/**
 * 2. FETCH BOOKING SLOTS
 */
function invalidateBookingsCache(targetTeam, targetMonthIdx, targetYear) {
  try {
    var cache = CacheService.getScriptCache();
    if (targetTeam && targetYear !== undefined) {
      var keysToRemove = [
        "b_" + targetTeam + "_" + targetMonthIdx + "_" + targetYear,
        "b_" + targetTeam + "_-1_" + targetYear,
        "b_ALL_-1_" + targetYear
      ];
      cache.removeAll(keysToRemove);
    }
    var teams = ["A", "B", "C", "D", "E", "X"];
    var years = [2026, 2027, 2028];
    var allKeys = [];
    for (var t = 0; t < teams.length; t++) {
      for (var y = 0; y < years.length; y++) {
        allKeys.push("b_" + teams[t] + "_-1_" + years[y]);
        for (var m = 0; m < 12; m++) {
          allKeys.push("b_" + teams[t] + "_" + m + "_" + years[y]);
        }
      }
    }
    for (var i = 0; i < allKeys.length; i += 50) {
      cache.removeAll(allKeys.slice(i, i + 50));
    }
  } catch(e) {}
}

function fetchBookings(position, team, monthIndex, year) {
  var monthIdx = parseInt(monthIndex);
  var isAllMonths = isNaN(monthIdx) || monthIdx < 0;
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var targetMonthStr = isAllMonths ? "" : monthNames[Math.max(0, Math.min(11, monthIdx))].toUpperCase();
  var targetTeamStr = team ? team.toString().trim().toUpperCase() : "";

  var cacheKey = "b_" + targetTeamStr + "_" + monthIdx + "_" + year;
  var shouldCache = (targetTeamStr !== "ALL" && targetTeamStr !== "" && monthIdx >= 0);

  if (shouldCache) {
    try {
      var cached = CacheService.getScriptCache().get(cacheKey);
      if (cached) {
        return JSON.parse(cached);
      }
    } catch(e) {}
  }
  
  var ss = getSpreadsheet("Vacation Table");
  var sheet = getSheetCaseInsensitive(ss, "Schedule 2027");
  if (!sheet) sheet = getSheetCaseInsensitive(ss, "ตารางการจองที่อยากให้โชว์ใน website");
  if (!sheet) sheet = ss.getSheets()[0];
  
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];

  var values = sheet.getRange(1, 1, lastRow, 6).getValues();
  var slots = [];

  var currentTeam = "";
  var currentYear = "";
  var currentMonth = "";

  for (var i = 1; i < values.length; i++) {
    var rowTeam = values[i][0] ? values[i][0].toString().trim().toUpperCase() : "";
    var rowYear = values[i][1] ? values[i][1].toString().trim() : "";
    var rowMonth = values[i][2] ? values[i][2].toString().trim().toUpperCase() : "";
    var dateRange = values[i][3] ? values[i][3].toString().trim() : "";
    var nameC = values[i][4] ? values[i][4].toString().trim() : "";
    var nameF = values[i][5] ? values[i][5].toString().trim() : "";

    if (rowTeam && rowTeam !== "TEAM" && rowTeam !== "ทีม") currentTeam = rowTeam;
    var yrMatch = rowYear.match(/\d{4}/);
    if (yrMatch) currentYear = yrMatch[0];
    if (rowMonth && rowMonth !== "MONTH" && rowMonth !== "เดือน") currentMonth = rowMonth;

    var isAllTeams = targetTeamStr === "ALL" || targetTeamStr === "";
    var isTeamMatch = isAllTeams || (currentTeam === targetTeamStr);
    var isMonthMatch = isAllMonths || (currentMonth === targetMonthStr);
    if (isTeamMatch && isMonthMatch && (currentYear.toString() === year.toString() || !year) && dateRange) {
      slots.push({
        rowNum: i + 1,
        year: parseInt(currentYear),
        month: currentMonth,
        team: currentTeam,
        concourse: "C",
        dateRange: dateRange,
        initialName: nameC,
        position: "Operator"
      });
      slots.push({
        rowNum: i + 1,
        year: parseInt(currentYear),
        month: currentMonth,
        team: currentTeam,
        concourse: "F",
        dateRange: dateRange,
        initialName: nameF,
        position: "Operator"
      });
    }
  }

  if (shouldCache) {
    try {
      CacheService.getScriptCache().put(cacheKey, JSON.stringify(slots), 30);
    } catch(e) {}
  }

  return slots;
}

/**
 * 3. SUBMIT BOOKING
 */
function submitBooking(position, team, monthIndex, year, dateRange, concourse, initialName, employeeEnglish, isBookedByAdmin) {
  var lock = LockService.getScriptLock();
  var hasLock = false;
  try {
    hasLock = lock.tryLock(3000);
  } catch (e) {
    hasLock = false;
  }

  try {
    var cleanPos = position ? position.toString().trim() : "";
    var cleanInit = initialName ? initialName.toString().trim().toUpperCase() : "";
    // Admin can book on behalf of employees - do NOT block isBookedByAdmin
    if (!isBookedByAdmin && (cleanPos === "Admin" || cleanInit === "ADMIN" || cleanInit === "AAF2")) {
      throw new Error("บัญชี Admin ต้องระบุชื่อพนักงานเพื่อจองแทน");
    }

    var safeMonthIdx = Math.max(0, Math.min(11, parseInt(monthIndex) || 0));
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var targetMonthStr = monthNames[safeMonthIdx].toUpperCase();
    var targetTeamStr = team ? team.toString().trim().toUpperCase() : "";
    var cleanInputDate = normalizeDateStr(dateRange);

    var ss = getSpreadsheet("Vacation Table");
    var sheet = getSheetCaseInsensitive(ss, "Schedule 2027");
    if (!sheet) sheet = getSheetCaseInsensitive(ss, "ตารางการจองที่อยากให้โชว์ใน website");
    if (!sheet) sheet = ss.getSheets()[0];

    var lastRow = sheet.getLastRow();
    if (lastRow < 2) throw new Error("ไม่พบข้อมูลตารางใน Google Sheet");

    var values = sheet.getRange(1, 1, lastRow, 4).getValues();
    var rowNum = -1;

    var currentTeam = "";
    var currentYear = "";
    var currentMonth = "";

    for (var i = 1; i < values.length; i++) {
      var rowTeam = values[i][0] ? values[i][0].toString().trim().toUpperCase() : "";
      var rowYear = values[i][1] ? values[i][1].toString().trim() : "";
      var rowMonth = values[i][2] ? values[i][2].toString().trim().toUpperCase() : "";
      var dateVal = values[i][3] ? values[i][3].toString().trim() : "";

      if (rowTeam && rowTeam !== "TEAM" && rowTeam !== "ทีม") currentTeam = rowTeam;
      var yrMatch = rowYear.match(/\d{4}/);
      if (yrMatch) currentYear = yrMatch[0];
      if (rowMonth && rowMonth !== "MONTH" && rowMonth !== "เดือน") currentMonth = rowMonth;

      if (currentTeam === targetTeamStr && currentMonth === targetMonthStr && (currentYear.toString() === year.toString() || !year) && normalizeDateStr(dateVal) === cleanInputDate) {
        rowNum = i + 1;
        break;
      }
    }

    if (rowNum === -1) {
      throw new Error("ไม่พบช่วงวันในตารางระบบสำหรับทีม " + team + " (" + targetMonthStr + " " + year + " - " + dateRange + ")");
    }

    // Check maximum booking limit (5 slots per year) - strip "(Admin)" suffix for quota lookup
    var quotaInitialName = initialName.toString().replace(/\s*\(Admin\)$/i, "").trim();
    var userYearBookings = getUserYearBookingCount(team, year, quotaInitialName);
    if (userYearBookings >= 5) {
      throw new Error("ไม่สามารถจองได้ เนื่องจากคุณได้จองวันพักร้อนครบกำหนดสูงสุด 5 ช่วงเวลาสำหรับปี ค.ศ. " + year + " แล้ว");
    }

    var colNum = (concourse === "C") ? 5 : 6;
    var currentOccupant = sheet.getRange(rowNum, colNum).getValue();
    if (currentOccupant && currentOccupant.toString().trim() !== "") {
      throw new Error("ช่วงวันลาฝั่ง Concourse " + concourse + " นี้ถูกจองไปแล้วโดย " + currentOccupant.toString().trim());
    }

    sheet.getRange(rowNum, colNum).setValue(initialName);
    SpreadsheetApp.flush();
    invalidateBookingsCache(targetTeamStr, safeMonthIdx, year);

    return { success: true };
  } finally {
    if (hasLock) {
      try { lock.releaseLock(); } catch(e) {}
    }
  }
}

/**
 * 4. CANCEL BOOKING
 */
function cancelBooking(position, team, monthIndex, year, dateRange, concourse, initialName, targetRowNum) {
  var lock = LockService.getScriptLock();
  var hasLock = false;
  try {
    hasLock = lock.tryLock(3000);
  } catch (e) {
    hasLock = false;
  }

  try {
    var safeMonthIdx = Math.max(0, Math.min(11, parseInt(monthIndex) || 0));
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var targetMonthStr = monthNames[safeMonthIdx].toUpperCase();
    var targetTeamStr = team ? team.toString().trim().toUpperCase() : "";
    var cleanInputDate = normalizeDateStr(dateRange);
    var cleanPos = position ? position.toString().trim().toLowerCase() : "";
    var cleanUser = initialName ? initialName.toString().trim().toLowerCase() : "";
    var isAdmin = (cleanPos === "admin" || cleanPos === "administrator" || cleanUser === "admin" || cleanUser === "aaf2" || cleanUser.indexOf("admin") !== -1);

    var ss = getSpreadsheet("Vacation Table");
    var sheet = getSheetCaseInsensitive(ss, "Schedule 2027");
    if (!sheet) sheet = getSheetCaseInsensitive(ss, "ตารางการจองที่อยากให้โชว์ใน website");
    if (!sheet) sheet = ss.getSheets()[0];

    var lastRow = sheet.getLastRow();
    if (lastRow < 2) throw new Error("ไม่พบข้อมูลในตารางระบบ");

    var rowNum = parseInt(targetRowNum) || -1;
    if (rowNum < 2 || rowNum > lastRow) {
      rowNum = -1;
    }

    var values = sheet.getRange(1, 1, lastRow, 6).getValues();

    // Pass 1: Try exact team & date match if rowNum not provided
    if (rowNum === -1) {
      var currentTeam = "";
      var currentYear = "";
      var currentMonth = "";

      for (var i = 1; i < values.length; i++) {
        var rowTeam = values[i][0] ? values[i][0].toString().trim().toUpperCase() : "";
        var rowYear = values[i][1] ? values[i][1].toString().trim() : "";
        var rowMonth = values[i][2] ? values[i][2].toString().trim().toUpperCase() : "";
        var dateVal = values[i][3] ? values[i][3].toString().trim() : "";

        if (rowTeam) currentTeam = rowTeam;
        if (rowYear) currentYear = rowYear;
        if (rowMonth) currentMonth = rowMonth;

        if (targetTeamStr && currentTeam === targetTeamStr && currentMonth === targetMonthStr && currentYear.toString() === year.toString() && normalizeDateStr(dateVal) === cleanInputDate) {
          rowNum = i + 1;
          break;
        }
      }
    }

    // Pass 2 (Fallback for Admin or Team Mismatch): Search across all teams for matching date & concourse with active booking
    if (rowNum === -1) {
      var currentTeam = "";
      var currentYear = "";
      var currentMonth = "";
      var colIdx = (concourse === "C") ? 4 : 5;

      for (var i = 1; i < values.length; i++) {
        var rowTeam = values[i][0] ? values[i][0].toString().trim().toUpperCase() : "";
        var rowYear = values[i][1] ? values[i][1].toString().trim() : "";
        var rowMonth = values[i][2] ? values[i][2].toString().trim().toUpperCase() : "";
        var dateVal = values[i][3] ? values[i][3].toString().trim() : "";
        var cellVal = values[i][colIdx] ? values[i][colIdx].toString().trim() : "";

        if (rowTeam) currentTeam = rowTeam;
        if (rowYear) currentYear = rowYear;
        if (rowMonth) currentMonth = rowMonth;

        if (currentMonth === targetMonthStr && currentYear.toString() === year.toString() && normalizeDateStr(dateVal) === cleanInputDate && cellVal) {
          rowNum = i + 1;
          break;
        }
      }
    }

    // Pass 3 (Broad fallback for month & concourse cell): Find first active booked cell in that month & concourse matching initialName
    if (rowNum === -1) {
      var colIdx = (concourse === "C") ? 4 : 5;
      var currentMonth = "";
      var currentYear = "";

      for (var i = 1; i < values.length; i++) {
        var rowYear = values[i][1] ? values[i][1].toString().trim() : "";
        var rowMonth = values[i][2] ? values[i][2].toString().trim().toUpperCase() : "";
        var cellVal = values[i][colIdx] ? values[i][colIdx].toString().trim() : "";

        if (rowYear) currentYear = rowYear;
        if (rowMonth) currentMonth = rowMonth;

        if (currentMonth === targetMonthStr && currentYear.toString() === year.toString() && cellVal) {
          var cleanCell = cellVal.toLowerCase();
          if (cleanCell.indexOf(cleanUser) !== -1 || cleanUser.indexOf(cleanCell) !== -1 || isAdmin) {
            rowNum = i + 1;
            break;
          }
        }
      }
    }

    if (rowNum === -1) {
      throw new Error("ไม่พบรายการจองนี้ในระบบ (เดือน: " + targetMonthStr + " " + year + ", ช่วงวัน: " + dateRange + ")");
    }

    var colNum = (concourse === "C") ? 5 : 6;
    var occupant = sheet.getRange(rowNum, colNum).getValue().toString().trim();
    var cleanOccupant = occupant.toLowerCase();

    if (!isAdmin && cleanOccupant && cleanOccupant !== cleanUser && cleanOccupant.indexOf(cleanUser) === -1 && cleanUser.indexOf(cleanOccupant) === -1) {
      throw new Error("คุณไม่มีสิทธิ์ยกเลิกการจองของพนักงานท่านอื่น (" + occupant + ")");
    }

    sheet.getRange(rowNum, colNum).setValue("");
    SpreadsheetApp.flush();
    invalidateBookingsCache(targetTeamStr, safeMonthIdx, year);

    return { success: true };
  } finally {
    if (hasLock) {
      try { lock.releaseLock(); } catch(e) {}
    }
  }
}

/**
 * 5. GET USER YEAR BOOKING COUNT
 */
function getUserYearBookingCount(team, year, initialName) {
  var ss = getSpreadsheet("Vacation Table");
  var sheet = getSheetCaseInsensitive(ss, "Schedule 2027");
  if (!sheet) sheet = getSheetCaseInsensitive(ss, "ตารางการจองที่อยากให้โชว์ใน website");
  if (!sheet) sheet = ss.getSheets()[0];

  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return 0;

  var count = 0;
  var currentTeam = "";
  var currentYear = "";
  var targetTeamStr = team ? team.toString().trim().toUpperCase() : "";
  var cleanInitialName = initialName ? initialName.toString().trim().toLowerCase() : "";

  var values = sheet.getRange(1, 1, lastRow, 6).getValues();

  for (var i = 1; i < values.length; i++) {
    var rowTeam = values[i][0] ? values[i][0].toString().trim().toUpperCase() : "";
    var rowYear = values[i][1] ? values[i][1].toString().trim() : "";
    
    if (rowTeam && rowTeam !== "TEAM" && rowTeam !== "ทีม") currentTeam = rowTeam;
    var yrMatch = rowYear.match(/\d{4}/);
    if (yrMatch) currentYear = yrMatch[0];
    
    var isAllTeams = targetTeamStr === "ALL" || targetTeamStr === "";
    var isTeamMatch = isAllTeams || (currentTeam === targetTeamStr);
    if (isTeamMatch && (currentYear.toString() === year.toString() || !year)) {
      var rawC = values[i][4] ? values[i][4].toString().trim().toLowerCase() : "";
      var rawF = values[i][5] ? values[i][5].toString().trim().toLowerCase() : "";
      // Strip " (admin)" suffix so Admin bookings count toward employee quota
      var baseC = rawC.replace(/\s*\(admin\)$/i, "");
      var baseF = rawF.replace(/\s*\(admin\)$/i, "");
      if (baseC === cleanInitialName || baseF === cleanInitialName) {
        count++;
      }
    }
  }
  return count;
}

/**
 * 6. GET USER BOOKING HISTORY
 */
function getUserBookingHistory(team, initialName) {
  var result = {
    personalLogs: []
  };

  try {
    var ss = getSpreadsheet("Vacation Table");
    var sheet = getSheetCaseInsensitive(ss, "Schedule 2027");
    if (!sheet) sheet = getSheetCaseInsensitive(ss, "ตารางการจองที่อยากให้โชว์ใน website");
    if (!sheet) sheet = ss.getSheets()[0];

    var lastRow = sheet.getLastRow();
    if (lastRow < 2) return result;

    var values = sheet.getRange(1, 1, lastRow, 6).getValues();
    var cleanInitial = initialName ? initialName.toString().trim().toLowerCase() : "";
    var targetTeamStr = team ? team.toString().trim().toUpperCase() : "";

    var currentTeam = "";
    var currentYear = "";
    var currentMonth = "";

    for (var i = 1; i < values.length; i++) {
      var rowTeam = values[i][0] ? values[i][0].toString().trim().toUpperCase() : "";
      var rowYear = values[i][1] ? values[i][1].toString().trim() : "";
      var rowMonth = values[i][2] ? values[i][2].toString().trim().toUpperCase() : "";
      var dateRange = values[i][3] ? values[i][3].toString().trim() : "";
      var nameC = values[i][4] ? values[i][4].toString().trim() : "";
      var nameF = values[i][5] ? values[i][5].toString().trim() : "";

      if (rowTeam && rowTeam !== "TEAM" && rowTeam !== "ทีม") currentTeam = rowTeam;
      var yrMatch = rowYear.match(/\d{4}/);
      if (yrMatch) currentYear = yrMatch[0];
      if (rowMonth && rowMonth !== "MONTH" && rowMonth !== "เดือน") currentMonth = rowMonth;

      if (!dateRange) continue;

      var isAllTeams = targetTeamStr === "ALL" || targetTeamStr === "";
      var isTeamMatch = isAllTeams || (currentTeam === targetTeamStr);

      // Check Concourse C (strip " (Admin)" suffix so Admin bookings show in employee history)
      if (nameC) {
        var cleanC = nameC.trim().toLowerCase();
        var baseC = cleanC.replace(/\s*\(admin\)$/i, "");
        if (baseC === cleanInitial && isTeamMatch) {
          var bookedByAdmin = /\(admin\)/i.test(cleanC);
          result.personalLogs.push({
            id: "SCH-C-" + (i + 1),
            empName: nameC,
            position: "Operator",
            team: currentTeam,
            concourse: "C",
            monthYear: currentMonth + " " + currentYear,
            dateRange: dateRange,
            timestamp: bookedByAdmin ? "จองโดย Admin" : "อนุมัติแล้ว",
            isOwner: true
          });
        }
      }

      // Check Concourse F (strip " (Admin)" suffix so Admin bookings show in employee history)
      if (nameF) {
        var cleanF = nameF.trim().toLowerCase();
        var baseF = cleanF.replace(/\s*\(admin\)$/i, "");
        if (baseF === cleanInitial && isTeamMatch) {
          var bookedByAdminF = /\(admin\)/i.test(cleanF);
          result.personalLogs.push({
            id: "SCH-F-" + (i + 1),
            empName: nameF,
            position: "Operator",
            team: currentTeam,
            concourse: "F",
            monthYear: currentMonth + " " + currentYear,
            dateRange: dateRange,
            timestamp: bookedByAdminF ? "จองโดย Admin" : "อนุมัติแล้ว",
            isOwner: true
          });
        }
      }
    }
  } catch (e) {
    Logger.log("getUserBookingHistory error: " + e.message);
  }

  return result;
}

/**
 * 7. GET ALL BOOKINGS HISTORY (For Admin Master Log)
 */
function getAllBookingsHistory() {
  var result = {
    adminLogs: []
  };

  try {
    var ss = getSpreadsheet("Vacation Table");
    var sheet = getSheetCaseInsensitive(ss, "Schedule 2027");
    if (!sheet) sheet = getSheetCaseInsensitive(ss, "ตารางการจองที่อยากให้โชว์ใน website");
    if (!sheet) sheet = ss.getSheets()[0];

    var lastRow = sheet.getLastRow();
    if (lastRow < 2) return result;

    var values = sheet.getRange(1, 1, lastRow, 6).getValues();

    var currentTeam = "";
    var currentYear = "";
    var currentMonth = "";

    for (var i = 1; i < values.length; i++) {
      var rowTeam = values[i][0] ? values[i][0].toString().trim().toUpperCase() : "";
      var rowYear = values[i][1] ? values[i][1].toString().trim() : "";
      var rowMonth = values[i][2] ? values[i][2].toString().trim().toUpperCase() : "";
      var dateRange = values[i][3] ? values[i][3].toString().trim() : "";
      var nameC = values[i][4] ? values[i][4].toString().trim() : "";
      var nameF = values[i][5] ? values[i][5].toString().trim() : "";

      if (rowTeam && rowTeam !== "TEAM" && rowTeam !== "ทีม") currentTeam = rowTeam;
      var yrMatch = rowYear.match(/\d{4}/);
      if (yrMatch) currentYear = yrMatch[0];
      if (rowMonth && rowMonth !== "MONTH" && rowMonth !== "เดือน") currentMonth = rowMonth;

      if (!dateRange) continue;

      if (nameC) {
        result.adminLogs.push({
          id: "ADM-C-" + (i + 1),
          empName: nameC,
          position: "Operator",
          team: currentTeam,
          concourse: "C",
          monthYear: currentMonth + " " + currentYear,
          dateRange: dateRange,
          timestamp: "อนุมัติแล้ว"
        });
      }

      if (nameF) {
        result.adminLogs.push({
          id: "ADM-F-" + (i + 1),
          empName: nameF,
          position: "Operator",
          team: currentTeam,
          concourse: "F",
          monthYear: currentMonth + " " + currentYear,
          dateRange: dateRange,
          timestamp: "อนุมัติแล้ว"
        });
      }
    }
  } catch (e) {
    Logger.log("getAllBookingsHistory error: " + e.message);
  }

  return result;
}

/**
 * 8. CLEAR ADMIN & TEST BOOKINGS (Reset Team A / JAN 2027 & specific initials PAR, PRA, THT, SOK, THS, CHI)
 */
function clearAdminBookings(targetTeam, targetMonth) {
  try {
    var ss = getSpreadsheet("Vacation Table");
    var sheet = getSheetCaseInsensitive(ss, "Schedule 2027");
    if (!sheet) sheet = getSheetCaseInsensitive(ss, "ตารางการจองที่อยากให้โชว์ใน website");
    if (!sheet) sheet = ss.getSheets()[0];

    var lastRow = sheet.getLastRow();
    if (lastRow < 2) return { success: true, clearedCount: 0 };

    var values = sheet.getRange(1, 1, lastRow, 6).getValues();
    var clearedCount = 0;
    var currentTeam = "";
    var currentYear = "";
    var currentMonth = "";

    var cleanTargetTeam = targetTeam ? targetTeam.toString().trim().toUpperCase() : "A";
    var cleanTargetMonth = targetMonth ? targetMonth.toString().trim().toUpperCase() : "JAN";

    for (var i = 1; i < values.length; i++) {
      var rowTeam = values[i][0] ? values[i][0].toString().trim().toUpperCase() : "";
      var rowYear = values[i][1] ? values[i][1].toString().trim() : "";
      var rowMonth = values[i][2] ? values[i][2].toString().trim().toUpperCase() : "";

      if (rowTeam) currentTeam = rowTeam;
      if (rowYear) currentYear = rowYear;
      if (rowMonth) currentMonth = rowMonth;

      var nameC = values[i][4] ? values[i][4].toString().trim() : "";
      var nameF = values[i][5] ? values[i][5].toString().trim() : "";

      var isTargetMatch = (currentTeam === cleanTargetTeam) && (currentMonth === cleanTargetMonth);

      if (isTargetMatch) {
        if (nameC) {
          sheet.getRange(i + 1, 5).setValue("");
          clearedCount++;
        }
        if (nameF) {
          sheet.getRange(i + 1, 6).setValue("");
          clearedCount++;
        }
      }
    }
    SpreadsheetApp.flush();
    invalidateBookingsCache();
    return { success: true, clearedCount: clearedCount };
  } catch (e) {
    return { success: false, error: e.message };
  }
}

/**
 * Clear all bookings made by Admin (containing '(Admin)') across the entire sheet
 */
function clearAllAdminBookings() {
  var lock = LockService.getScriptLock();
  var hasLock = false;
  try {
    hasLock = lock.tryLock(5000);
  } catch (e) {
    hasLock = false;
  }

  try {
    var ss = getSpreadsheet("Vacation Table");
    var sheet = getSheetCaseInsensitive(ss, "Schedule 2027");
    if (!sheet) sheet = getSheetCaseInsensitive(ss, "ตารางการจองที่อยากให้โชว์ใน website");
    if (!sheet) sheet = ss.getSheets()[0];

    var lastRow = sheet.getLastRow();
    if (lastRow < 2) return { success: true, count: 0 };

    var range = sheet.getRange(1, 1, lastRow, 6);
    var values = range.getValues();
    var count = 0;

    for (var i = 1; i < values.length; i++) {
      var valC = values[i][4] ? values[i][4].toString() : "";
      var valF = values[i][5] ? values[i][5].toString() : "";

      if (/\(admin\)/i.test(valC)) {
        sheet.getRange(i + 1, 5).setValue("");
        count++;
      }
      if (/\(admin\)/i.test(valF)) {
        sheet.getRange(i + 1, 6).setValue("");
        count++;
      }
    }

    SpreadsheetApp.flush();
    invalidateBookingsCache();
    return { success: true, count: count };
  } finally {
    if (hasLock) {
      try { lock.releaseLock(); } catch(e) {}
    }
  }
}

/**
 * Completely clear all bookings in Columns E & F of Vacation Table Schedule sheet
 */
function clearAllTableBookings() {
  try {
    var ss = getSpreadsheet("Vacation Table");
    var sheet = getSheetCaseInsensitive(ss, "Schedule 2027");
    if (!sheet) sheet = getSheetCaseInsensitive(ss, "ตารางการจองที่อยากให้โชว์ใน website");
    if (!sheet) sheet = ss.getSheets()[0];

    var lastRow = sheet.getLastRow();
    if (lastRow >= 2) {
      sheet.getRange(2, 5, lastRow - 1, 2).clearContent();
      SpreadsheetApp.flush();
      invalidateBookingsCache();
    }
    return { success: true, count: lastRow - 1 };
  } catch (e) {
    return { success: false, error: e.message };
  }
}
