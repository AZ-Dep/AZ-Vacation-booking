// ==========================================================================
// AZ Vacation Booking Application - Complete JS Frontend Controller
// ==========================================================================

const SIM_EMPLOYEES = [
    {
        "employeeNo": "423110",
        "initialName": "ADMIN",
        "employeeThai": "ผู้ดูแลระบบ 1",
        "employeeEnglish": "Admin",
        "position": "Admin",
        "team": "A",
        "concourse": "C",
        "isAdmin": true
    },
    {
        "employeeNo": "502110",
        "initialName": "ADMIN",
        "employeeThai": "ผู้ดูแลระบบ 2",
        "employeeEnglish": "Admin",
        "position": "Admin",
        "team": "A",
        "concourse": "C",
        "isAdmin": true
    },
    {
        "employeeNo": "331110",
        "initialName": "AAF2",
        "employeeThai": "ผู้ดูแลระบบ 3",
        "employeeEnglish": "Admin",
        "position": "Admin",
        "team": "A",
        "concourse": "C",
        "isAdmin": true
    },
    {
        "employeeNo": "110236",
        "initialName": "SYO",
        "employeeThai": "นาย สายัญ อ่อนทรัพย์",
        "employeeEnglish": "Mr Sayan Onsap",
        "position": "Operator",
        "team": "C",
        "concourse": "C"
    },
    {
        "employeeNo": "110246",
        "initialName": "JTU",
        "employeeThai": "นาย จตุรงค์ จิตเขตร",
        "employeeEnglish": "Mr Jaturong Jitkhet",
        "position": "Operator",
        "team": "B",
        "concourse": "C"
    },
    {
        "employeeNo": "110297",
        "initialName": "KAU",
        "employeeThai": "นาย คณพศ สุดแสวง",
        "employeeEnglish": "Mr Kanaphos Sudsawang",
        "position": "Operator",
        "team": "X",
        "concourse": "C"
    },
    {
        "employeeNo": "110301",
        "initialName": "PRO",
        "employeeThai": "นาย ไพโรจน์ ขาวเหลือง",
        "employeeEnglish": "Mr Pairojh Kowleung",
        "position": "Operator",
        "team": "E",
        "concourse": "C"
    },
    {
        "employeeNo": "110315",
        "initialName": "KAW",
        "employeeThai": "นาย กรัณวิทณ์ วลินโชคธนกิจ",
        "employeeEnglish": "Mr Karanwitn Walinchoktanakij",
        "position": "Operator",
        "team": "E",
        "concourse": "C"
    },
    {
        "employeeNo": "110334",
        "initialName": "PDP",
        "employeeThai": "นาย ประดิษฐ์ ทรายเพชร",
        "employeeEnglish": "Mr Pradit Saipet",
        "position": "Operator",
        "team": "A",
        "concourse": "C"
    },
    {
        "employeeNo": "110360",
        "initialName": "WHA",
        "employeeThai": "นาย วิชัย อมรประเวศ",
        "employeeEnglish": "Mr Wichai Amornpravas",
        "position": "Operator",
        "team": "D",
        "concourse": "C"
    },
    {
        "employeeNo": "110361",
        "initialName": "NTC",
        "employeeThai": "นาย นิติ เชื้อหอม",
        "employeeEnglish": "Mr Niti Chauhorm",
        "position": "Operator",
        "team": "X",
        "concourse": "F"
    },
    {
        "employeeNo": "110377",
        "initialName": "WJP",
        "employeeThai": "นาย วิจิตร พงษา",
        "employeeEnglish": "Mr Whigit Pongsa",
        "position": "Operator",
        "team": "C",
        "concourse": "F"
    },
    {
        "employeeNo": "110378",
        "initialName": "AKN",
        "employeeThai": "นาย เอกรัตน์ นาควิจิตร",
        "employeeEnglish": "Mr Ekarat Nakwijit",
        "position": "Operator",
        "team": "E",
        "concourse": "F"
    },
    {
        "employeeNo": "110382",
        "initialName": "SUN",
        "employeeThai": "นาย สันติ พานเงิน",
        "employeeEnglish": "Mr Santi Panngern",
        "position": "Operator",
        "team": "A",
        "concourse": "F"
    },
    {
        "employeeNo": "110385",
        "initialName": "SVS",
        "employeeThai": "นาย เสวก ศรีธาตุ",
        "employeeEnglish": "Mr Savaxe Sritat",
        "position": "Operator",
        "team": "B",
        "concourse": "C"
    },
    {
        "employeeNo": "110388",
        "initialName": "SUF",
        "employeeThai": "นาย สุชาติ เฟื่องมณี",
        "employeeEnglish": "Mr Suchat Feurmanee",
        "position": "Operator",
        "team": "D",
        "concourse": "C"
    },
    {
        "employeeNo": "110391",
        "initialName": "SWL",
        "employeeThai": "นาย ศราวุฒิ ละวรรณวงศ์",
        "employeeEnglish": "Mr Sarawut Lawanwong",
        "position": "Operator",
        "team": "X",
        "concourse": "C"
    },
    {
        "employeeNo": "110393",
        "initialName": "SRR",
        "employeeThai": "นาย สุรรัตน์ กลิ่นสุคนธ์",
        "employeeEnglish": "Mr Surarat Kinsukon",
        "position": "Operator",
        "team": "B",
        "concourse": "C"
    },
    {
        "employeeNo": "110419",
        "initialName": "DCH",
        "employeeThai": "นาย ดำรงค์ชัย กลีบงาม",
        "employeeEnglish": "Mr Damrongchai Kleebngam",
        "position": "Operator",
        "team": "A",
        "concourse": "F"
    },
    {
        "employeeNo": "110428",
        "initialName": "CNP",
        "employeeThai": "นาย ชัยณรงค์ พึ่งผล",
        "employeeEnglish": "Mr Chainarong Pungpol",
        "position": "Operator",
        "team": "E",
        "concourse": "C"
    },
    {
        "employeeNo": "110436",
        "initialName": "SES",
        "employeeThai": "นาย เสริมพันธุ์ สมเกิด",
        "employeeEnglish": "Mr Surmphan Somkerd",
        "position": "Operator",
        "team": "B",
        "concourse": "F"
    },
    {
        "employeeNo": "110437",
        "initialName": "CCV",
        "employeeThai": "นาย ฉัตรชัย วิมุตตาสี",
        "employeeEnglish": "Mr Chatchai Vimoottase",
        "position": "Operator",
        "team": "D",
        "concourse": "C"
    },
    {
        "employeeNo": "110453",
        "initialName": "WES",
        "employeeThai": "นาย วีระศักดิ์ สวนแก้วมณี",
        "employeeEnglish": "Mr Weerasak Suankewmanee",
        "position": "Operator",
        "team": "D",
        "concourse": "F"
    },
    {
        "employeeNo": "110471",
        "initialName": "CHW",
        "employeeThai": "นาย ชนม์นิธิธัญ วรรณศิลป์",
        "employeeEnglish": "Mr Chonnititan Wannasin",
        "position": "Operator",
        "team": "C",
        "concourse": "F"
    },
    {
        "employeeNo": "110497",
        "initialName": "BAJ",
        "employeeThai": "นาย บรรเจิด จูประวัติ",
        "employeeEnglish": "Mr Banjerd Juprawat",
        "position": "Operator",
        "team": "B",
        "concourse": "F"
    },
    {
        "employeeNo": "110500",
        "initialName": "POS",
        "employeeThai": "นาย พรศักดิ์ สนอ่วม",
        "employeeEnglish": "Mr Pornsak Sonaum",
        "position": "Operator",
        "team": "C",
        "concourse": "C"
    },
    {
        "employeeNo": "110503",
        "initialName": "YUP",
        "employeeThai": "นาย ยุทธนา โพธิสุวรรณ",
        "employeeEnglish": "Mr Yuttana Photisuwan",
        "position": "Operator",
        "team": "A",
        "concourse": "F"
    },
    {
        "employeeNo": "110528",
        "initialName": "SUB",
        "employeeThai": "นาย สุรเดช บุตรทุมพันธ์",
        "employeeEnglish": "Mr Suradat Budtumpan",
        "position": "Operator",
        "team": "A",
        "concourse": "F"
    },
    {
        "employeeNo": "110529",
        "initialName": "NAH",
        "employeeThai": "นาย นัฐพงษ์ หอมชะมด",
        "employeeEnglish": "Mr Natthapong Homchamod",
        "position": "Operator",
        "team": "A",
        "concourse": "C"
    },
    {
        "employeeNo": "110530",
        "initialName": "RIS",
        "employeeThai": "นาย ฤทธิกร ศิรบัญชากุล",
        "employeeEnglish": "Mr Rithikorn Sirabunchakun",
        "position": "Operator",
        "team": "B",
        "concourse": "F"
    },
    {
        "employeeNo": "110564",
        "initialName": "AKS",
        "employeeThai": "นาย อัครเดช ศรีวิเศษ",
        "employeeEnglish": "Mr Akaradech Sriwiset",
        "position": "Operator",
        "team": "D",
        "concourse": "C"
    },
    {
        "employeeNo": "110565",
        "initialName": "PHT",
        "employeeThai": "นาย พิสิษฐ์ ตันพิพัฒน์",
        "employeeEnglish": "Mr Phisit Thanpipat",
        "position": "Operator",
        "team": "X",
        "concourse": "C"
    },
    {
        "employeeNo": "110591",
        "initialName": "KRR",
        "employeeThai": "นาย กฤตภาส เรืองสังข์",
        "employeeEnglish": "Mr Krittaphat Reungsang",
        "position": "Operator",
        "team": "C",
        "concourse": "F"
    },
    {
        "employeeNo": "110593",
        "initialName": "KES",
        "employeeThai": "นาย เกียรติศักดิ์ สนธิลา",
        "employeeEnglish": "Mr Keattisak Sontila",
        "position": "Operator",
        "team": "C",
        "concourse": "C"
    },
    {
        "employeeNo": "110608",
        "initialName": "POT",
        "employeeThai": "นาย ปองภพ ทองสุขสว่าง",
        "employeeEnglish": "Mr Pongpop Thongsuksawang",
        "position": "Operator",
        "team": "X",
        "concourse": "F"
    },
    {
        "employeeNo": "110611",
        "initialName": "KIP",
        "employeeThai": "นาย กิตติพศ พูลทอง",
        "employeeEnglish": "Mr Kittipod Pooltong",
        "position": "Operator",
        "team": "E",
        "concourse": "C"
    },
    {
        "employeeNo": "110621",
        "initialName": "PRA",
        "employeeThai": "นาย ประดิษฐ์ สว่างแสง",
        "employeeEnglish": "Mr Pradit Sawangsang",
        "position": "Operator",
        "team": "X",
        "concourse": "F"
    },
    {
        "employeeNo": "110623",
        "initialName": "KAE",
        "employeeThai": "นาย กันตภณ เพ็ชรกูล",
        "employeeEnglish": "Mr Kantapon Petkool",
        "position": "Operator",
        "team": "C",
        "concourse": "C"
    },
    {
        "employeeNo": "110625",
        "initialName": "THS",
        "employeeThai": "นาย ธนิสร แสงนวล",
        "employeeEnglish": "Mr Thanisorn Sangnual",
        "position": "Operator",
        "team": "A",
        "concourse": "C"
    },
    {
        "employeeNo": "110645",
        "initialName": "ANP",
        "employeeThai": "นาย อาณัติ ปัญญามัง",
        "employeeEnglish": "Mr Anut Punyamung",
        "position": "Operator",
        "team": "B",
        "concourse": "F"
    },
    {
        "employeeNo": "110649",
        "initialName": "CHD",
        "employeeThai": "นาย ชวลิต ดาราเย็น",
        "employeeEnglish": "Mr Chawarit Darayen",
        "position": "Operator",
        "team": "D",
        "concourse": "C"
    },
    {
        "employeeNo": "110650",
        "initialName": "KRS",
        "employeeThai": "นาย กฤตภาส สังข์อินทร์",
        "employeeEnglish": "Mr Krittapas Sungin",
        "position": "Operator",
        "team": "E",
        "concourse": "F"
    },
    {
        "employeeNo": "110673",
        "initialName": "POR",
        "employeeThai": "นาย พลชาติ เบอรพันธุ์",
        "employeeEnglish": "Mr Pollachart Burpunta",
        "position": "Operator",
        "team": "D",
        "concourse": "C"
    },
    {
        "employeeNo": "110679",
        "initialName": "ARB",
        "employeeThai": "นาย อานนท์ บุญแพง",
        "employeeEnglish": "Mr Arnon Bunpaeng",
        "position": "Operator",
        "team": "C",
        "concourse": "F"
    },
    {
        "employeeNo": "110680",
        "initialName": "KRJ",
        "employeeThai": "นาย ไกรวิทย์ จันทะลือ",
        "employeeEnglish": "Mr Kraiwit Juntalue",
        "position": "Operator",
        "team": "C",
        "concourse": "F"
    },
    {
        "employeeNo": "110681",
        "initialName": "PIG",
        "employeeThai": "นาย ปิติพงษ์ กองศรี",
        "employeeEnglish": "Mr Pitipong Gongsee",
        "position": "Operator",
        "team": "C",
        "concourse": "C"
    },
    {
        "employeeNo": "110693",
        "initialName": "VOT",
        "employeeThai": "นาย วรเนตร ทองจันทร์",
        "employeeEnglish": "Mr Vorranate Thongjun",
        "position": "Operator",
        "team": "D",
        "concourse": "F"
    },
    {
        "employeeNo": "110707",
        "initialName": "SOK",
        "employeeThai": "นาย ทรงสิทธิ์ คันธะชัย",
        "employeeEnglish": "Mr Songsit Khanthachai",
        "position": "Operator",
        "team": "X",
        "concourse": "F"
    },
    {
        "employeeNo": "110715",
        "initialName": "WAU",
        "employeeThai": "นาย วันชัย นิลสุวรรณ",
        "employeeEnglish": "Mr Wanchai Ninsuwan",
        "position": "Operator",
        "team": "A",
        "concourse": "C"
    },
    {
        "employeeNo": "110716",
        "initialName": "NAC",
        "employeeThai": "นาย ณัฐวัตร์ เจริญพงศ์นรา",
        "employeeEnglish": "Mr Natthawat Charoenpongnara",
        "position": "Operator",
        "team": "A",
        "concourse": "C"
    },
    {
        "employeeNo": "110718",
        "initialName": "NAK",
        "employeeThai": "นาย ณคม แก่นไทย",
        "employeeEnglish": "Mr Nakhom Kanthai",
        "position": "Operator",
        "team": "D",
        "concourse": "F"
    },
    {
        "employeeNo": "110734",
        "initialName": "CHL",
        "employeeThai": "นาย ฉัตรณรงค์ ลาดเหลา",
        "employeeEnglish": "Mr Chatnarong Lardlaou",
        "position": "Operator",
        "team": "B",
        "concourse": "C"
    },
    {
        "employeeNo": "110735",
        "initialName": "SUI",
        "employeeThai": "นาย สุพิน ทรายเพชร",
        "employeeEnglish": "Mr Suphin Saiphetr",
        "position": "Operator",
        "team": "C",
        "concourse": "C"
    },
    {
        "employeeNo": "110736",
        "initialName": "RAN",
        "employeeThai": "นาย รัตน์ชานนท์ น้อยนอนเมือง",
        "employeeEnglish": "Mr Ratchanon Noinonmueng",
        "position": "Operator",
        "team": "B",
        "concourse": "C"
    },
    {
        "employeeNo": "110744",
        "initialName": "NAI",
        "employeeThai": "นาย ณัฐวุฒิ ศรีโอชา",
        "employeeEnglish": "Mr Nattawut Sri-ocha",
        "position": "Operator",
        "team": "A",
        "concourse": "C"
    },
    {
        "employeeNo": "110746",
        "initialName": "SAD",
        "employeeThai": "นาย สันติสุข ดำมุสิก",
        "employeeEnglish": "Mr Santisuk Dammusik",
        "position": "Operator",
        "team": "E",
        "concourse": "F"
    },
    {
        "employeeNo": "110748",
        "initialName": "CHI",
        "employeeThai": "นาย เจริญพร นิ่มนวล",
        "employeeEnglish": "Mr Charoenporn Nimnuan",
        "position": "Operator",
        "team": "X",
        "concourse": "C"
    },
    {
        "employeeNo": "110749",
        "initialName": "KRN",
        "employeeThai": "นาย กฤษดา นามศรี",
        "employeeEnglish": "Mr Krisada Namsri",
        "position": "Operator",
        "team": "B",
        "concourse": "F"
    },
    {
        "employeeNo": "110750",
        "initialName": "WET",
        "employeeThai": "นาย วีรวัจน์ เทียนใต้",
        "employeeEnglish": "Mr Weerawat Theantai",
        "position": "Operator",
        "team": "D",
        "concourse": "F"
    },
    {
        "employeeNo": "110767",
        "initialName": "POA",
        "employeeThai": "นาย ปุณณวิช แก้ววานิช",
        "employeeEnglish": "Mr Poonnawit Kaewwanit",
        "position": "Operator",
        "team": "E",
        "concourse": "C"
    },
    {
        "employeeNo": "110782",
        "initialName": "WCS",
        "employeeThai": "นาย วัชรพงษ์ สระแก้ว",
        "employeeEnglish": "Mr Watcharaphong Srakaeo",
        "position": "Operator",
        "team": "B",
        "concourse": "F"
    },
    {
        "employeeNo": "110783",
        "initialName": "NPP",
        "employeeThai": "นาย นำพล ปานมี",
        "employeeEnglish": "Mr Nampol Panmee",
        "position": "Operator",
        "team": "D",
        "concourse": "C"
    },
    {
        "employeeNo": "110786",
        "initialName": "CHH",
        "employeeThai": "นาย ชัชนันท์ ทานัธยพงศ์",
        "employeeEnglish": "Mr Chutchanun Thanattayapong",
        "position": "Operator",
        "team": "B",
        "concourse": "F"
    },
    {
        "employeeNo": "110788",
        "initialName": "PAR",
        "employeeThai": "นาย ปรินทร คีรีผา",
        "employeeEnglish": "Mr Parinthon Kerepa",
        "position": "Operator",
        "team": "E",
        "concourse": "C"
    },
    {
        "employeeNo": "110789",
        "initialName": "ADP",
        "employeeThai": "นาย อดิศร พันธุ์มา",
        "employeeEnglish": "Mr Adisorn Punma",
        "position": "Operator",
        "team": "D",
        "concourse": "F"
    },
    {
        "employeeNo": "110794",
        "initialName": "BUS",
        "employeeThai": "นาย บัณฑิต แสงพา",
        "employeeEnglish": "Mr Bundit Sangpa",
        "position": "Operator",
        "team": "C",
        "concourse": "C"
    },
    {
        "employeeNo": "110800",
        "initialName": "THT",
        "employeeThai": "นาย ธิติพงศ์ ทุเรียน",
        "employeeEnglish": "Mr Thitipong Turian",
        "position": "Operator",
        "team": "D",
        "concourse": "C"
    },
    {
        "employeeNo": "110807",
        "initialName": "NIL",
        "employeeThai": "นาย นิติพล กลีบกำไร",
        "employeeEnglish": "Mr Nitiphon Klipkamral",
        "position": "Operator",
        "team": "C",
        "concourse": "C"
    },
    {
        "employeeNo": "110859",
        "initialName": "SIA",
        "employeeThai": "นาย ศิริพงษ์ บัวเที่ยง",
        "employeeEnglish": "Mr Siripong Buathiang",
        "position": "Operator",
        "team": "E",
        "concourse": "F"
    },
    {
        "employeeNo": "110860",
        "initialName": "TAK",
        "employeeThai": "นาย ธนพัฒน์ กิจเดช",
        "employeeEnglish": "Mr Tanapat Kitdate",
        "position": "Operator",
        "team": "A",
        "concourse": "F"
    },
    {
        "employeeNo": "110862",
        "initialName": "TNP",
        "employeeThai": "นาย ธนปาลิต ประทุมสิทธิ์",
        "employeeEnglish": "Mr Thanapalit Prathumsit",
        "position": "Operator",
        "team": "A",
        "concourse": "C"
    },
    {
        "employeeNo": "110863",
        "initialName": "SAC",
        "employeeThai": "นาย ศักดิ์สิทธิ์ จันทะวงค์",
        "employeeEnglish": "Mr Saksit Chantawong",
        "position": "Operator",
        "team": "X",
        "concourse": "F"
    },
    {
        "employeeNo": "110868",
        "initialName": "SIN",
        "employeeThai": "นาย ศิรชัช ชาญพิบูลย์เกียรติ",
        "employeeEnglish": "Mr Sirachat Chanpibunkiat",
        "position": "Operator",
        "team": "X",
        "concourse": "C"
    },
    {
        "employeeNo": "110869",
        "initialName": "PAS",
        "employeeThai": "นาย พันธกานต์ ถนอมสวย",
        "employeeEnglish": "Mr Pantakarn Thanomsuay",
        "position": "Operator",
        "team": "E",
        "concourse": "C"
    },
    {
        "employeeNo": "110870",
        "initialName": "ANE",
        "employeeThai": "นาย อโนทัย คุ้มเกตุ",
        "employeeEnglish": "Mr Anothai Khumket",
        "position": "Operator",
        "team": "D",
        "concourse": "F"
    },
    {
        "employeeNo": "110871",
        "initialName": "NTK",
        "employeeThai": "นาย ณัฐกานต์ ขนานแข็ง",
        "employeeEnglish": "Mr Natthakan Kanankaeng",
        "position": "Operator",
        "team": "X",
        "concourse": "F"
    },
    {
        "employeeNo": "110872",
        "initialName": "PAD",
        "employeeThai": "นาย ภาสกร ดุงสูงเนิน",
        "employeeEnglish": "Mr Pasakorn Dungsungnurn",
        "position": "Operator",
        "team": "B",
        "concourse": "F"
    },
    {
        "employeeNo": "110894",
        "initialName": "PAG",
        "employeeThai": "นาย ภาณุพงศ์ จงวรรธนะศิลป์",
        "employeeEnglish": "Mr Panupong Jongwatanasin",
        "position": "Operator",
        "team": "C",
        "concourse": "F"
    },
    {
        "employeeNo": "110895",
        "initialName": "NUG",
        "employeeThai": "นาย ณัฎชนนท์ เงินยิ่ง",
        "employeeEnglish": "Mr Nutchanond Ngoenying",
        "position": "Operator",
        "team": "E",
        "concourse": "C"
    },
    {
        "employeeNo": "110897",
        "initialName": "POS",
        "employeeThai": "นาย พอฝัน น้อยสระ",
        "employeeEnglish": "Mr Porfhun Noisra",
        "position": "Operator",
        "team": "B",
        "concourse": "C"
    },
    {
        "employeeNo": "110909",
        "initialName": "PHW",
        "employeeThai": "นาย พุฒิพร วงค์ศรีสังข์",
        "employeeEnglish": "Mr Phutthiporn Wongsrisang",
        "position": "Operator",
        "team": "E",
        "concourse": "C"
    },
    {
        "employeeNo": "110921",
        "initialName": "TAC",
        "employeeThai": "นาย ธนโชติ ไชยโสดา",
        "employeeEnglish": "Mr Thanachot Chaisoda",
        "position": "Operator",
        "team": "A",
        "concourse": "F"
    },
    {
        "employeeNo": "110922",
        "initialName": "SPH",
        "employeeThai": "นาย ศุภพล ทวีกสิกรรม",
        "employeeEnglish": "Mr Supaphon Thaweekasikam",
        "position": "Operator",
        "team": "D",
        "concourse": "F"
    },
    {
        "employeeNo": "110923",
        "initialName": "TAM",
        "employeeThai": "นาย ทวีเกียรติ ธรรมพันธ์",
        "employeeEnglish": "Mr Thaveekeat Thammapan",
        "position": "Operator",
        "team": "X",
        "concourse": "F"
    },
    {
        "employeeNo": "110924",
        "initialName": "OAB",
        "employeeThai": "นาย อรรถพล บาริศรี",
        "employeeEnglish": "Mr Oatthaphon Barisri",
        "position": "Operator",
        "team": "A",
        "concourse": "F"
    },
    {
        "employeeNo": "110925",
        "initialName": "APN",
        "employeeThai": "นาย อภิชาติ ช้างแก้ว",
        "employeeEnglish": "Mr Apichat Changkeaw",
        "position": "Operator",
        "team": "B",
        "concourse": "C"
    },
    {
        "employeeNo": "110926",
        "initialName": "RIB",
        "employeeThai": "นาย ฤทธิชัย บุญธรรม",
        "employeeEnglish": "Mr Rittichai Boontham",
        "position": "Operator",
        "team": "X",
        "concourse": "C"
    },
    {
        "employeeNo": "110938",
        "initialName": "PAU",
        "employeeThai": "นาย ภาณุวัฒน์ พวงทอง",
        "employeeEnglish": "Mr Panuwat Puangthong",
        "position": "Operator",
        "team": "E",
        "concourse": "F"
    },
    {
        "employeeNo": "110939",
        "initialName": "WOB",
        "employeeThai": "นาย วรพล บัวแก้ว",
        "employeeEnglish": "Mr Worapon Buakeaw",
        "position": "Operator",
        "team": "C",
        "concourse": "F"
    },
    {
        "employeeNo": "110940",
        "initialName": "UDM",
        "employeeThai": "นาย อุดร มีพันธ์",
        "employeeEnglish": "Mr Udorn Meepan",
        "position": "Operator",
        "team": "D",
        "concourse": "F"
    },
    {
        "employeeNo": "110942",
        "initialName": "UTN",
        "employeeThai": "นาย อุเทน งามแป้น",
        "employeeEnglish": "Mr Uthen Ngampaen",
        "position": "Operator",
        "team": "A",
        "concourse": "C"
    },
    {
        "employeeNo": "110944",
        "initialName": "ABS",
        "employeeThai": "นาย อภิสิทธิ์ สมบูรณ์",
        "employeeEnglish": "Mr Abhisit Somboon",
        "position": "Operator",
        "team": "X",
        "concourse": "C"
    },
    {
        "employeeNo": "110948",
        "initialName": "VAS",
        "employeeThai": "นาย วสินธุ์ สุขอร่าม",
        "employeeEnglish": "Mr Vasin Suk-aram",
        "position": "Operator",
        "team": "C",
        "concourse": "C"
    },
    {
        "employeeNo": "110955",
        "initialName": "NCH",
        "employeeThai": "นาย นัฐวุฒิ ชาภู่พวง",
        "employeeEnglish": "Mr Nattawut Chapoopuang",
        "position": "Operator",
        "team": "A",
        "concourse": "F"
    },
    {
        "employeeNo": "110956",
        "initialName": "WEE",
        "employeeThai": "นาย วีรยุทธิ์ หนีกระโทก",
        "employeeEnglish": "Mr Weerayoot Neekratok",
        "position": "Operator",
        "team": "B",
        "concourse": "C"
    },
    {
        "employeeNo": "110971",
        "initialName": "TOK",
        "employeeThai": "นาย ทศพล กำแพงทอง",
        "employeeEnglish": "Mr Tossapol Kumpangtong",
        "position": "Operator",
        "team": "A",
        "concourse": "C"
    },
    {
        "employeeNo": "110976",
        "initialName": "CHO",
        "employeeThai": "นาย ชนาภิวัฒน์ อ่อนเที่ยง",
        "employeeEnglish": "Mr Chanapiwat Ontieng",
        "position": "Operator",
        "team": "X",
        "concourse": "F"
    },
    {
        "employeeNo": "110978",
        "initialName": "SUT",
        "employeeThai": "นาย สุวิทย์ ถากง",
        "employeeEnglish": "Mr Suwit Thakong",
        "position": "Operator",
        "team": "C",
        "concourse": "C"
    },
    {
        "employeeNo": "110979",
        "initialName": "SAT",
        "employeeThai": "นาย สหัสวรรษ ปรีเดช",
        "employeeEnglish": "Mr Sahadsavat Preedet",
        "position": "Operator",
        "team": "B",
        "concourse": "C"
    },
    {
        "employeeNo": "110984",
        "initialName": "NAA",
        "employeeThai": "นาย ณัฐพล อุทานุเคราะห์",
        "employeeEnglish": "Mr Natthaphon Authanukhrao",
        "position": "Operator",
        "team": "D",
        "concourse": "C"
    },
    {
        "employeeNo": "110985",
        "initialName": "NIH",
        "employeeThai": "นาย นิติพงษ์ หาญสมุทร์",
        "employeeEnglish": "Mr Nitipong Hansamut",
        "position": "Operator",
        "team": "A",
        "concourse": "F"
    },
    {
        "employeeNo": "110987",
        "initialName": "KOE",
        "employeeThai": "นาย ก่อเกียรติ เข็มทอง",
        "employeeEnglish": "Mr Kokeart Kemthong",
        "position": "Operator",
        "team": "B",
        "concourse": "F"
    },
    {
        "employeeNo": "110999",
        "initialName": "ARM",
        "employeeThai": "นาย อามีน หมาดยูโส๊ะ",
        "employeeEnglish": "Mr Armeen Madyousoh",
        "position": "Operator",
        "team": "A",
        "concourse": "C"
    },
    {
        "employeeNo": "111006",
        "initialName": "TNB",
        "employeeThai": "นาย ธนบูรณ์ บุญเที่ยง",
        "employeeEnglish": "Mr Tanaboon Boontiang",
        "position": "Operator",
        "team": "E",
        "concourse": "F"
    },
    {
        "employeeNo": "111013",
        "initialName": "PHS",
        "employeeThai": "นาย พิสุทธิ์ สวัสดี",
        "employeeEnglish": "Mr Phisut Sawatdi",
        "position": "Operator",
        "team": "X",
        "concourse": "C"
    },
    {
        "employeeNo": "111014",
        "initialName": "KAJ",
        "employeeThai": "นาย ก้านเพชร ใจมั่น",
        "employeeEnglish": "Mr Kanpech Jaiman",
        "position": "Operator",
        "team": "E",
        "concourse": "F"
    },
    {
        "employeeNo": "111021",
        "initialName": "WAS",
        "employeeThai": "นาย วัชระ ศรีธระชิยานนท์",
        "employeeEnglish": "Mr Watchara Sitharachiyanon",
        "position": "Operator",
        "team": "C",
        "concourse": "F"
    },
    {
        "employeeNo": "111022",
        "initialName": "WAB",
        "employeeThai": "นาย วสนพล บุญทับ",
        "employeeEnglish": "Mr Wasanaphon Bunthap",
        "position": "Operator",
        "team": "E",
        "concourse": "F"
    },
    {
        "employeeNo": "111026",
        "initialName": "THW",
        "employeeThai": "นาย ธนชัย ราชวัตร์",
        "employeeEnglish": "Mr Thanachai Ratchawat",
        "position": "Operator",
        "team": "D",
        "concourse": "F"
    },
    {
        "employeeNo": "111028",
        "initialName": "KOL",
        "employeeThai": "นาย คมปกร เหล็กจีน",
        "employeeEnglish": "Mr Komprakorn Lekjeen",
        "position": "Operator",
        "team": "X",
        "concourse": "C"
    },
    {
        "employeeNo": "111032",
        "initialName": "NUD",
        "employeeThai": "นาย ณัฐวัตร ดงอุทิศ",
        "employeeEnglish": "Mr Nuttawat Dongutit",
        "position": "Operator",
        "team": "B",
        "concourse": "F"
    },
    {
        "employeeNo": "111033",
        "initialName": "THG",
        "employeeThai": "นาย ธีรพงศ์ บำรุง",
        "employeeEnglish": "Mr Thiraphong Bamrung",
        "position": "Operator",
        "team": "A",
        "concourse": "F"
    },
    {
        "employeeNo": "111046",
        "initialName": "PHB",
        "employeeThai": "นาย พิชญุตม์ บัวใหญ่",
        "employeeEnglish": "Mr Phitchayut Buayai",
        "position": "Operator",
        "team": "E",
        "concourse": "C"
    },
    {
        "employeeNo": "111050",
        "initialName": "NAD",
        "employeeThai": "นาย ณัฐกานต์ เกิดมีเงิน",
        "employeeEnglish": "Mr Nattakan Kerdmeengern",
        "position": "Operator",
        "team": "E",
        "concourse": "F"
    },
    {
        "employeeNo": "111055",
        "initialName": "THE",
        "employeeThai": "นายธนโชติ ยานางิซาวา",
        "employeeEnglish": "Mr Thanachote Yanagisawa",
        "position": "Operator",
        "team": "F",
        "concourse": "F"
    },
    {
        "employeeNo": "111059",
        "initialName": "NAE",
        "employeeThai": "นาย ณัฐพล อินทร์เจริญ",
        "employeeEnglish": "Mr Nattaphol Incharean",
        "position": "Operator",
        "team": "C",
        "concourse": "C"
    },
    {
        "employeeNo": "111060",
        "initialName": "SUE",
        "employeeThai": "นาย ศุภชัย ปะวะเสนัง",
        "employeeEnglish": "Mr Supachai Pavasenang",
        "position": "Operator",
        "team": "C",
        "concourse": "F"
    },
    {
        "employeeNo": "111061",
        "initialName": "BOS",
        "employeeThai": "นาย บริวัฒน์ สืบสอน",
        "employeeEnglish": "Mr Boriwat Suebsorn",
        "position": "Operator",
        "team": "E",
        "concourse": "C"
    },
    {
        "employeeNo": "111063",
        "initialName": "SUU",
        "employeeThai": "นาย ศุภชัย หมู่หัวนา",
        "employeeEnglish": "Mr Suphachai Muahwanna",
        "position": "Operator",
        "team": "D",
        "concourse": "C"
    },
    {
        "employeeNo": "111064",
        "initialName": "TAU",
        "employeeThai": "นาย ตะวัน ศรีเมืองเดช",
        "employeeEnglish": "Mr Thawan Srimuangdet",
        "position": "Operator",
        "team": "A",
        "concourse": "F"
    }
];

const MONTHS_TH = [
    "มกราคม (JAN)", "กุมภาพันธ์ (FEB)", "มีนาคม (MAR)", "เมษายน (APR)",
    "พฤษภาคม (MAY)", "มิถุนายน (JUN)", "กรกฎาคม (JUL)", "สิงหาคม (AUG)",
    "กันยายน (SEP)", "ตุลาคม (OCT)", "พฤศจิกายน (NOV)", "ธันวาคม (DEC)"
];

const MONTHS_ENG_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// --- APP STATE ---
let isSimulationMode = false;
let currentUser = null;
let selectedSlot = null;
let slotsData = [];
const SIM_BOOKINGS = {};

document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    isSimulationMode = (typeof google === "undefined" || !google.script || !google.script.run) && (typeof GAS_URL === "undefined" || !GAS_URL || GAS_URL.trim() === "");
    console.log("App initialized. Mode: " + (isSimulationMode ? "Simulation (Local)" : "Apps Script API"));

    applyCustomImages();

    const todayStr = getLocalDateString(new Date());
    const mockInput = document.getElementById("mock-today");
    if (mockInput) mockInput.value = todayStr;
    mockTodayDate = new Date(todayStr);

    const yearSelect = document.getElementById("select-year");
    if (yearSelect) {
        yearSelect.innerHTML = "";
        const opt2027 = document.createElement("option");
        opt2027.value = 2027;
        opt2027.textContent = "2027";
        yearSelect.appendChild(opt2027);

        const opt2028 = document.createElement("option");
        opt2028.value = 2028;
        opt2028.textContent = "2028 (รอดำเนินการ)";
        opt2028.disabled = true;
        yearSelect.appendChild(opt2028);
    }

    const toolbarYearSelect = document.getElementById("toolbar-year-select");
    if (toolbarYearSelect) {
        toolbarYearSelect.innerHTML = "";
        const opt2027b = document.createElement("option");
        opt2027b.value = 2027;
        opt2027b.textContent = "2027";
        toolbarYearSelect.appendChild(opt2027b);

        const opt2028b = document.createElement("option");
        opt2028b.value = 2028;
        opt2028b.textContent = "2028 (รอดำเนินการ)";
        opt2028b.disabled = true;
        toolbarYearSelect.appendChild(opt2028b);
    }

    if (document.getElementById("select-month")) document.getElementById("select-month").value = 0;
    if (document.getElementById("select-year")) document.getElementById("select-year").value = 2027;
    if (document.getElementById("toolbar-month-select")) document.getElementById("toolbar-month-select").value = 0;
    if (document.getElementById("toolbar-year-select")) document.getElementById("toolbar-year-select").value = 2027;

    setupEventHandlers();
    checkLoginState();
}

function applyCustomImages() {
    if (typeof LOGO_URL !== 'undefined' && LOGO_URL) {
        const loginLogo = document.getElementById("login-logo-img");
        const appLogo = document.getElementById("app-logo-img");
        if (loginLogo) loginLogo.src = LOGO_URL;
        if (appLogo) appLogo.src = LOGO_URL;
    }
    if (typeof BACKGROUND_URL !== 'undefined' && BACKGROUND_URL) {
        const bgWrapper = document.querySelector(".bg-wrapper");
        if (bgWrapper) bgWrapper.style.backgroundImage = `url('${BACKGROUND_URL}')`;
    }
}

function setupEventHandlers() {
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            performLogin();
        });
    }

    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            logoutUser();
        });
    }

    const mockInput = document.getElementById("mock-today");
    if (mockInput) {
        mockInput.addEventListener("change", (e) => {
            mockTodayDate = new Date(e.target.value);
            clearSelection();
            loadVacationSlots();
        });
    }

    const selectMonth = document.getElementById("select-month");
    if (selectMonth) {
        selectMonth.addEventListener("change", (e) => {
            const tbMonth = document.getElementById("toolbar-month-select");
            if (tbMonth) tbMonth.value = e.target.value;
            clearSelection();
            loadVacationSlots();
        });
    }

    const selectYear = document.getElementById("select-year");
    if (selectYear) {
        selectYear.addEventListener("change", (e) => {
            const tbYear = document.getElementById("toolbar-year-select");
            if (tbYear) tbYear.value = e.target.value;
            clearSelection();
            loadVacationSlots();
        });
    }

    const toolbarMonthSelect = document.getElementById("toolbar-month-select");
    if (toolbarMonthSelect) {
        toolbarMonthSelect.addEventListener("change", (e) => {
            if (selectMonth) selectMonth.value = e.target.value;
            clearSelection();
            loadVacationSlots();
        });
    }

    const toolbarYearSelect = document.getElementById("toolbar-year-select");
    if (toolbarYearSelect) {
        toolbarYearSelect.addEventListener("change", (e) => {
            if (selectYear) selectYear.value = e.target.value;
            clearSelection();
            loadVacationSlots();
        });
    }

    const adminCalendarTeamSelect = document.getElementById("calendar-admin-team-select");
    if (adminCalendarTeamSelect) {
        adminCalendarTeamSelect.addEventListener("change", (e) => {
            if (currentUser) {
                currentUser.team = e.target.value;
                const sidebarTeam = document.getElementById("sidebar-admin-team-select");
                if (sidebarTeam) sidebarTeam.value = e.target.value;
                clearSelection();
                loadVacationSlots();
            }
        });
    }

    const sidebarAdminTeamSelect = document.getElementById("sidebar-admin-team-select");
    if (sidebarAdminTeamSelect) {
        sidebarAdminTeamSelect.addEventListener("change", (e) => {
            if (currentUser) {
                currentUser.team = e.target.value;
                const toolbarTeam = document.getElementById("calendar-admin-team-select");
                if (toolbarTeam) toolbarTeam.value = e.target.value;
                clearSelection();
                loadVacationSlots();
            }
        });
    }

    const btnConfirm = document.getElementById("btn-confirm-booking");
    if (btnConfirm) {
        btnConfirm.addEventListener("click", () => {
            openBookingModal();
        });
    }

    const btnModalSubmit = document.getElementById("btn-modal-submit");
    if (btnModalSubmit) {
        btnModalSubmit.addEventListener("click", () => {
            submitBookingData();
        });
    }

    const btnModalDelete = document.getElementById("btn-modal-delete");
    if (btnModalDelete) {
        btnModalDelete.addEventListener("click", () => {
            cancelBookingData();
        });
    }

    // Real-Time Cross-Tab Event Sync
    window.addEventListener("storage", (e) => {
        if (e.key === "az_vacation_last_update") {
            silentReloadVacationSlots();
        }
    });

    // Real-Time 3-Second Background Polling Loop
    setInterval(() => {
        silentReloadVacationSlots();
    }, 3000);
}

function notifyDataChanged() {
    try {
        window._calendarSlotsCache = {};
        window._lastUserDashboardLogsHash = "";
        window._lastAdminDashboardLogsHash = "";
        localStorage.setItem("az_vacation_last_update", Date.now().toString());
    } catch (e) { }
}

function silentReloadVacationSlots() {
    if (!currentUser) return;

    const bookingModal = document.getElementById("booking-modal");
    const editModal = document.getElementById("edit-modal");
    const isModalOpen = (bookingModal && !bookingModal.classList.contains("hidden")) ||
        (editModal && !editModal.classList.contains("hidden"));
    if (isModalOpen) return;

    const monthSelect = document.getElementById("select-month");
    const yearSelect = document.getElementById("select-year");
    const monthIndex = monthSelect ? parseInt(monthSelect.value) : 0;
    const year = yearSelect ? parseInt(yearSelect.value) : 2027;

    const adminTeamSelect = document.getElementById("calendar-admin-team-select");
    const isAdminUser = currentUser.position === "Admin" || currentUser.isAdmin === true || currentUser.role === "Admin";
    const activeTeam = (isAdminUser && adminTeamSelect) ? adminTeamSelect.value : (currentUser.team || "A");

    const expectedKey = `${activeTeam}_${year}_${monthIndex}`;

    const calTab = document.getElementById("nav-tab-calendar");
    if (calTab && calTab.classList.contains("active")) {
        callGasApi("fetchBookings", [currentUser.position, activeTeam, monthIndex, year])
            .then((result) => {
                if (window._expectedCalendarKey !== expectedKey) {
                    return;
                }
                if (result && Array.isArray(result)) {
                    window._calendarSlotsCache[expectedKey] = result;
                    const prevStr = JSON.stringify(slotsData || []);
                    const newStr = JSON.stringify(result);
                    if (prevStr !== newStr) {
                        renderSlots(result, monthIndex, year, true, true);
                    }
                }
            })
            .catch(err => console.log("Silent sync calendar error:", err));
    }

    const dashTab = document.getElementById("nav-tab-dashboard");
    if (dashTab && dashTab.classList.contains("active")) {
        loadDashboardData(true);
    }
}

function callGasApi(functionName, args = []) {
    return new Promise((resolve, reject) => {
        if (typeof google !== "undefined" && google.script && google.script.run) {
            google.script.run
                .withSuccessHandler(res => resolve(res))
                .withFailureHandler(err => reject(err))[functionName](...args);
        } else if (typeof GAS_URL !== "undefined" && GAS_URL) {
            const paramKeys = {
                loginUser: ["initialName", "employeeNo"],
                fetchBookings: ["position", "team", "monthIndex", "year"],
                getUserYearBookingCount: ["team", "year", "initialName"],
                getUserBookingHistory: ["team", "initialName"],
                getAllBookingsHistory: [],
                clearAllTableBookings: [],
                clearAllAdminBookings: [],
                clearAdminBookings: ["team", "month"],
                submitBooking: ["position", "team", "monthIndex", "year", "dateRange", "concourse", "initialName", "employeeEnglish", "isBookedByAdmin"],
                cancelBooking: ["position", "team", "monthIndex", "year", "dateRange", "concourse", "initialName", "rowNum"]
            };
            const queryObj = { action: functionName };
            if (paramKeys[functionName]) {
                paramKeys[functionName].forEach((k, idx) => { queryObj[k] = args[idx]; });
            }
            const query = new URLSearchParams(queryObj).toString();
            const fetchPromise = fetch(`${GAS_URL}?${query}`);

            fetchPromise
                .then(res => res.json())
                .then(res => {
                    if (res.success) resolve(res.data);
                    else reject(new Error(res.error || "เกิดข้อผิดพลาดจากระบบ"));
                })
                .catch(err => reject(err));
        } else if (isSimulationMode) {
            if (functionName === "clearAllTableBookings") {
                Object.keys(SIM_BOOKINGS).forEach(k => delete SIM_BOOKINGS[k]);
                notifyDataChanged();
                return resolve({ success: true });
            } else if (functionName === "clearAllAdminBookings") {
                let count = 0;
                Object.keys(SIM_BOOKINGS).forEach(k => {
                    if (/\(admin\)/i.test(SIM_BOOKINGS[k])) {
                        delete SIM_BOOKINGS[k];
                        count++;
                    }
                });
                notifyDataChanged();
                return resolve({ success: true, count: count });
            } else if (functionName === "clearAdminBookings") {
                const [team, month] = args;
                let count = 0;
                Object.keys(SIM_BOOKINGS).forEach(k => {
                    const parts = k.split("_");
                    if ((!team || parts[0] === team) && (!month || parts[2].toUpperCase() === month.toUpperCase())) {
                        delete SIM_BOOKINGS[k];
                        count++;
                    }
                });
                notifyDataChanged();
                return resolve({ success: true, count: count });
            } else if (functionName === "fetchBookings") {
                const [position, team, monthIndex, year] = args;
                const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

                const monthIdx = parseInt(monthIndex);
                const isAllMonths = isNaN(monthIdx) || monthIdx < 0;
                const targetMonths = isAllMonths ? monthNames : [monthNames[Math.max(0, Math.min(11, monthIdx))]];
                const targetTeams = (team === "ALL" || !team) ? ["A", "B", "C", "D", "E", "X"] : [team];

                const slots = [];

                // 1. Add all booked slots from SIM_BOOKINGS matching team, month, year
                Object.keys(SIM_BOOKINGS).forEach(k => {
                    const parts = k.split("_");
                    if (parts.length >= 5) {
                        const kTeam = parts[0];
                        const kYear = parseInt(parts[1]);
                        const kMonth = parts[2];
                        const kDate = parts[3];
                        const kConc = parts[4];

                        const isTeamMatch = (team === "ALL" || !team || kTeam === team);
                        const isMonthMatch = isAllMonths || (kMonth.toUpperCase() === (monthNames[monthIdx] || "").toUpperCase());
                        const isYearMatch = (kYear === year);

                        if (isTeamMatch && isMonthMatch && isYearMatch && SIM_BOOKINGS[k]) {
                            slots.push({
                                rowNum: 99,
                                year: kYear,
                                month: kMonth,
                                team: kTeam,
                                concourse: kConc,
                                dateRange: kDate,
                                initialName: SIM_BOOKINGS[k],
                                position: "Operator"
                            });
                        }
                    }
                });

                // 2. Add template slots for targetMonths and targetTeams if not already included
                const dateRanges = [
                    "วันที่ 2-3-4-5", "วันที่ 8-9-10-11", "วันที่ 14-15-16-17", "วันที่ 20-21-22-23", "วันที่ 26-27-28-29"
                ];

                targetTeams.forEach(tStr => {
                    targetMonths.forEach(mStr => {
                        dateRanges.forEach((dr, idx) => {
                            ["C", "F"].forEach(conc => {
                                const key = `${tStr}_${year}_${mStr}_${dr}_${conc}`;
                                const exists = slots.some(s => s.team === tStr && s.month.toUpperCase() === mStr.toUpperCase() && s.dateRange === dr && s.concourse === conc);
                                if (!exists) {
                                    slots.push({
                                        rowNum: idx * 2 + 1,
                                        year: year,
                                        month: mStr,
                                        team: tStr,
                                        concourse: conc,
                                        dateRange: dr,
                                        initialName: SIM_BOOKINGS[key] || "",
                                        position: "Operator"
                                    });
                                }
                            });
                        });
                    });
                });

                return resolve(slots);
            } else if (functionName === "submitBooking") {
                const [position, team, monthIndex, year, dateRange, concourse, initialName, employeeEnglish, isBookedByAdmin] = args;
                const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                const mStr = monthNames[monthIndex] || "Jan";
                const key = `${team}_${year}_${mStr}_${dateRange}_${concourse}`;
                SIM_BOOKINGS[key] = initialName;
                return resolve({ success: true });
            } else if (functionName === "cancelBooking") {
                const [position, team, monthIndex, year, dateRange, concourse, initialName] = args;
                const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                const mStr = monthNames[monthIndex] || "Jan";
                const cleanDate = dateRange ? dateRange.toString().replace(/[^\d\-]/g, "") : "";

                Object.keys(SIM_BOOKINGS).forEach(k => {
                    const parts = k.split("_");
                    const kDate = parts[3] ? parts[3].toString().replace(/[^\d\-]/g, "") : "";
                    if (parts[2].toUpperCase() === mStr.toUpperCase() &&
                        parts[4].toUpperCase() === (concourse || "").toUpperCase() &&
                        (kDate === cleanDate || parts[3] === dateRange)) {
                        delete SIM_BOOKINGS[k];
                    }
                });
                notifyDataChanged();
                return resolve({ success: true });
            } else if (functionName === "getUserYearBookingCount") {
                const [team, year, initialName] = args;
                const cleanInitial = initialName ? initialName.toString().trim().toUpperCase() : "";
                let count = 0;
                Object.keys(SIM_BOOKINGS).forEach(k => {
                    const parts = k.split("_");
                    // parts: [team, year, month, dateRange, concourse]
                    if (parts[0] === team && parts[1] === year.toString()) {
                        const cellValue = SIM_BOOKINGS[k].toString().trim().toUpperCase();
                        // Strip " (ADMIN)" suffix before comparing
                        const baseValue = cellValue.replace(/\s*\(ADMIN\)$/i, "");
                        if (baseValue === cleanInitial) {
                            count++;
                        }
                    }
                });
                return resolve(count);
            } else if (functionName === "getUserBookingHistory") {
                const [team, initialName] = args;
                const cleanInitial = initialName ? initialName.toString().trim().toUpperCase() : "";
                const personalLogs = [];
                Object.keys(SIM_BOOKINGS).forEach(k => {
                    const parts = k.split("_");
                    const cellValue = SIM_BOOKINGS[k].toString().trim();
                    const cellUpper = cellValue.toUpperCase();
                    // Strip " (Admin)" suffix before comparing
                    const baseValue = cellUpper.replace(/\s*\(ADMIN\)$/i, "");
                    if (baseValue === cleanInitial && parts[0] === team) {
                        const bookedByAdmin = /\(Admin\)/i.test(cellValue);
                        personalLogs.push({
                            id: "SCH-" + parts[4] + "-" + parts[0],
                            empName: cellValue,
                            position: "Operator",
                            team: parts[0],
                            concourse: parts[4],
                            monthYear: parts[2] + " " + parts[1],
                            dateRange: parts[3],
                            timestamp: bookedByAdmin ? "จองโดย Admin" : "อนุมัติแล้ว",
                            isOwner: true
                        });
                    }
                });
                return resolve({ personalLogs: personalLogs });
            } else if (functionName === "getAllBookingsHistory") {
                const adminLogs = [];
                Object.keys(SIM_BOOKINGS).forEach(k => {
                    const parts = k.split("_");
                    adminLogs.push({
                        id: "ADM-" + parts[4] + "-" + parts[0],
                        empName: SIM_BOOKINGS[k],
                        position: "Operator",
                        team: parts[0],
                        concourse: parts[4],
                        monthYear: parts[2] + " " + parts[1],
                        dateRange: parts[3],
                        timestamp: "อนุมัติแล้ว"
                    });
                });
                return resolve({ adminLogs: adminLogs });
            } else if (functionName === "loginUser") {
                const [initialName, employeeNo] = args;
                const found = SIM_EMPLOYEES.find(e => e.initialName.toUpperCase() === initialName.toUpperCase() && e.employeeNo === employeeNo);
                if (found) return resolve(found);
                return reject(new Error("ข้อมูลเข้าสู่ระบบไม่ถูกต้อง"));
            }
        } else {
            reject(new Error("ไม่พบการเชื่อมต่อกับระบบ Google Apps Script"));
        }
    });
}

function performLogin() {
    const initialInput = document.getElementById("login-username").value.trim().toUpperCase();
    const passwordInput = document.getElementById("login-password").value.trim();
    const loginError = document.getElementById("login-error");
    const loginBtn = document.getElementById("btn-login-submit");

    if (!initialInput || !passwordInput) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        return;
    }

    if (loginError) loginError.classList.add("hidden");
    if (loginBtn) {
        loginBtn.disabled = true;
        loginBtn.textContent = "กำลังตรวจสอบ...";
    }

    // 1. Direct Priority Check for Admin Credentials (ADMIN / Admin@1423, 423110, 502110, 331110)
    const isPassAdmin = (passwordInput.toLowerCase() === "admin@1423" || passwordInput === "423110" || passwordInput === "502110" || passwordInput === "331110");
    const isAdminLogin = (initialInput === "ADMIN" || initialInput === "AAF2") && isPassAdmin;

    if (isAdminLogin) {
        const adminUserData = {
            employeeNo: passwordInput,
            initialName: initialInput,
            employeeThai: "ผู้ดูแลระบบ (Admin)",
            employeeEnglish: "Administrator",
            position: "Admin",
            team: "A",
            concourse: "C",
            isAdmin: true
        };
        setTimeout(() => {
            sessionStorage.setItem("az_logged_in_user_data", JSON.stringify(adminUserData));
            checkLoginState();
            if (loginBtn) {
                loginBtn.disabled = false;
                loginBtn.textContent = "เข้าสู่ระบบ";
            }
        }, 150);
        return;
    }

    const localFound = SIM_EMPLOYEES.find(emp =>
        emp.initialName.toUpperCase() === initialInput &&
        emp.employeeNo.trim() === passwordInput
    );

    if (localFound) {
        setTimeout(() => {
            sessionStorage.setItem("az_logged_in_user_data", JSON.stringify(localFound));
            checkLoginState();
            if (loginBtn) {
                loginBtn.disabled = false;
                loginBtn.textContent = "เข้าสู่ระบบ";
            }
        }, 200);
        return;
    }

    callGasApi("loginUser", [initialInput, passwordInput])
        .then((result) => {
            sessionStorage.setItem("az_logged_in_user_data", JSON.stringify(result));
            checkLoginState();
            if (loginBtn) {
                loginBtn.disabled = false;
                loginBtn.textContent = "เข้าสู่ระบบ";
            }
        })
        .catch((error) => {
            console.error("Login failed:", error);
            if (loginError) {
                loginError.textContent = "⚠️ " + (error.message || "ข้อมูลเข้าสู่ระบบไม่ถูกต้อง");
                loginError.classList.remove("hidden");
            }
            if (loginBtn) {
                loginBtn.disabled = false;
                loginBtn.textContent = "เข้าสู่ระบบ";
            }
        });
}

function checkLoginState() {
    const savedUser = sessionStorage.getItem("az_logged_in_user_data");
    const loginBtn = document.getElementById("btn-login-submit");

    if (savedUser) {
        currentUser = JSON.parse(savedUser);

        const isAdmin = currentUser && (currentUser.position === "Admin" || currentUser.isAdmin === true || currentUser.role === "Admin");
        const initDisplay = document.getElementById("user-initial-display");
        const nameDisplay = document.getElementById("user-name-display");

        if (isAdmin) {
            if (initDisplay) {
                initDisplay.textContent = "👑 Admin";
                initDisplay.classList.remove("hidden");
            }
            if (nameDisplay) {
                nameDisplay.textContent = "";
                nameDisplay.classList.add("hidden");
            }
        } else {
            if (initDisplay) {
                initDisplay.textContent = currentUser.initialName;
                initDisplay.classList.remove("hidden");
            }
            if (nameDisplay) {
                nameDisplay.textContent = currentUser.employeeEnglish;
                nameDisplay.classList.remove("hidden");
            }
        }

        if (document.getElementById("profile-initial")) document.getElementById("profile-initial").textContent = currentUser.initialName;
        if (document.getElementById("profile-english-name")) document.getElementById("profile-english-name").textContent = currentUser.employeeEnglish;
        if (document.getElementById("profile-position")) document.getElementById("profile-position").textContent = currentUser.position;
        if (document.getElementById("profile-team")) document.getElementById("profile-team").textContent = currentUser.team;

        const concourseField = document.getElementById("profile-concourse-field");
        if (currentUser.position === "Operator" && concourseField) {
            concourseField.classList.remove("hidden");
            if (document.getElementById("profile-concourse")) document.getElementById("profile-concourse").textContent = "Concourse " + currentUser.concourse;
        } else if (concourseField) {
            concourseField.classList.add("hidden");
        }

        const calendarToolbar = document.getElementById("calendar-toolbar");
        const adminTeamWrapper = document.getElementById("admin-calendar-team-wrapper");
        const dashTab = document.getElementById("nav-tab-dashboard");

        if (isAdmin) {
            if (calendarToolbar) calendarToolbar.classList.remove("hidden");
            if (adminTeamWrapper) {
                adminTeamWrapper.classList.remove("hidden");
                const adminTeamSelect = document.getElementById("calendar-admin-team-select");
                if (adminTeamSelect) adminTeamSelect.value = currentUser.team;
            }
            if (dashTab) dashTab.classList.add("hidden");

            const sidebarTeamWrapper = document.getElementById("sidebar-admin-team-wrapper");
            if (sidebarTeamWrapper) {
                sidebarTeamWrapper.classList.remove("hidden");
                const sidebarTeamSelect = document.getElementById("sidebar-admin-team-select");
                if (sidebarTeamSelect) sidebarTeamSelect.value = currentUser.team;
            }
        } else {
            if (calendarToolbar) calendarToolbar.classList.add("hidden");
            if (adminTeamWrapper) adminTeamWrapper.classList.add("hidden");
            if (dashTab) dashTab.classList.remove("hidden");

            const sidebarTeamWrapper = document.getElementById("sidebar-admin-team-wrapper");
            if (sidebarTeamWrapper) sidebarTeamWrapper.classList.add("hidden");
        }

        const overlay = document.getElementById("login-overlay");
        if (overlay) {
            overlay.classList.remove("active");
            overlay.classList.add("hidden");
        }
        const appContainer = document.getElementById("app-container");
        if (appContainer) appContainer.classList.remove("hidden");

        if (loginBtn) {
            loginBtn.disabled = false;
            loginBtn.textContent = "เข้าสู่ระบบ";
        }

        if (isAdmin) {
            switchNavTab('calendar');
        } else {
            switchNavTab('dashboard');
        }
    } else {
        currentUser = null;
        const calendarToolbar = document.getElementById("calendar-toolbar");
        if (calendarToolbar) calendarToolbar.classList.add("hidden");
        const overlay = document.getElementById("login-overlay");
        if (overlay) {
            overlay.classList.add("active");
            overlay.classList.remove("hidden");
        }
        const appContainer = document.getElementById("app-container");
        if (appContainer) appContainer.classList.add("hidden");

        if (document.getElementById("login-username")) document.getElementById("login-username").value = "";
        if (document.getElementById("login-password")) document.getElementById("login-password").value = "";

        const initDisplay = document.getElementById("user-initial-display");
        const nameDisplay = document.getElementById("user-name-display");
        if (initDisplay) {
            initDisplay.textContent = "Guest";
            initDisplay.classList.remove("hidden");
        }
        if (nameDisplay) {
            nameDisplay.textContent = "ผู้ใช้งานทั่วไป";
            nameDisplay.classList.remove("hidden");
        }

        if (loginBtn) {
            loginBtn.disabled = false;
            loginBtn.textContent = "เข้าสู่ระบบ";
        }
    }
}

function changeMonthByOffset(offset) {
    const monthSelect = document.getElementById("select-month");
    const yearSelect = document.getElementById("select-year");
    if (!monthSelect || !yearSelect) return;

    let currentMonth = parseInt(monthSelect.value);
    let currentYear = parseInt(yearSelect.value);

    currentMonth += offset;

    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }

    monthSelect.value = currentMonth;

    let hasYear = false;
    for (let i = 0; i < yearSelect.options.length; i++) {
        if (parseInt(yearSelect.options[i].value) === currentYear) {
            hasYear = true;
            break;
        }
    }
    if (!hasYear) {
        const option = document.createElement("option");
        option.value = currentYear;
        option.textContent = currentYear;
        yearSelect.appendChild(option);
    }
    yearSelect.value = currentYear;

    clearSelection();
    loadVacationSlots();
}

function exportBookingsToExcel() {
    if (!slotsData || slotsData.length === 0) {
        alert("ไม่มีข้อมูลการจองในเดือนนี้สำหรับการส่งออก");
        return;
    }

    const monthIndex = parseInt(document.getElementById("select-month").value);
    const year = document.getElementById("select-year").value;
    const team = currentUser ? currentUser.team : "A";
    const monthName = MONTHS_TH[monthIndex] || "";
    const monthEng = MONTHS_ENG_SHORT[monthIndex].toUpperCase();

    const grouped = {};
    slotsData.forEach(slot => {
        if (!grouped[slot.dateRange]) {
            grouped[slot.dateRange] = { dateRange: slot.dateRange, concourseC: "-", concourseF: "-" };
        }
        if (slot.concourse === "C" && slot.initialName) grouped[slot.dateRange].concourseC = slot.initialName;
        if (slot.concourse === "F" && slot.initialName) grouped[slot.dateRange].concourseF = slot.initialName;
    });

    let tableHtml = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
    <head>
        <meta charset="utf-8" />
        <!--[if gte mso 9]>
        <xml>
            <x:ExcelWorkbook>
                <x:ExcelWorksheets>
                    <x:ExcelWorksheet>
                        <x:Name>ตารางพักร้อน Team ${team}</x:Name>
                        <x:WorksheetOptions>
                            <x:DisplayGridlines/>
                        </x:WorksheetOptions>
                    </x:ExcelWorksheet>
                </x:ExcelWorksheets>
            </x:ExcelWorkbook>
        </xml>
        <![endif]-->
        <style>
            th { background-color: #0c2340; color: #ffffff; font-weight: bold; text-align: center; border: 1px solid #cccccc; padding: 8px; }
            td { border: 1px solid #cccccc; text-align: center; font-family: Tahoma, Arial, sans-serif; padding: 6px; }
            .title { font-size: 16px; font-weight: bold; color: #0c2340; text-align: center; }
        </style>
    </head>
    <body>
        <table>
            <tr>
                <td colspan="7" class="title">ตารางการจองวันลาพักร้อน ทีม ${team} - เดือน ${monthName} (${monthEng}) ${year}</td>
            </tr>
            <tr></tr>
            <tr>
                <th>ลำดับ</th>
                <th>ช่วงวันที่จอง</th>
                <th>เดือน</th>
                <th>ปี ค.ศ.</th>
                <th>ทีม</th>
                <th>Concourse C</th>
                <th>Concourse F</th>
            </tr>
    `;

    let index = 1;
    Object.values(grouped).forEach(item => {
        const bgC = item.concourseC !== '-' ? '#e3f2fd' : '#ffffff';
        const bgF = item.concourseF !== '-' ? '#e8f5e9' : '#ffffff';
        tableHtml += `
            <tr>
                <td>${index}</td>
                <td>${item.dateRange}</td>
                <td>${monthEng} (${monthName})</td>
                <td>${year}</td>
                <td>Team ${team}</td>
                <td style="background-color: ${bgC}; font-weight: bold;">${item.concourseC}</td>
                <td style="background-color: ${bgF}; font-weight: bold;">${item.concourseF}</td>
            </tr>
        `;
        index++;
    });

    tableHtml += `
        </table>
    </body>
    </html>
    `;

    const blob = new Blob([tableHtml], { type: "application/vnd.ms-excel;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `AZ_Vacation_Bookings_Team${team}_${monthEng}_${year}.xls`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function logoutUser() {
    sessionStorage.removeItem("az_logged_in_user_data");
    clearSelection();
    checkLoginState();
}

function switchNavTab(tabName) {
    const dashTab = document.getElementById("nav-tab-dashboard");
    const calTab = document.getElementById("nav-tab-calendar");
    const dashView = document.getElementById("view-dashboard");
    const calView = document.getElementById("view-calendar");

    if (!dashTab || !calTab || !dashView || !calView) return;

    if (tabName === "dashboard") {
        dashTab.classList.add("active");
        calTab.classList.remove("active");
        dashView.classList.remove("hidden");
        calView.classList.add("hidden");
        loadDashboardData();
    } else {
        calTab.classList.add("active");
        dashTab.classList.remove("active");
        calView.classList.remove("hidden");
        dashView.classList.add("hidden");
        if (currentUser) {
            loadVacationSlots();
        }
    }
}

function parseMonthIndex(monthStr) {
    if (!monthStr) return 0;
    const clean = monthStr.toString().trim().toUpperCase();
    const engShort = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const engFull = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
    const thaiShort = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
    const thaiFull = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];

    let idx = engShort.indexOf(clean);
    if (idx !== -1) return idx;

    idx = engFull.indexOf(clean);
    if (idx !== -1) return idx;

    idx = thaiShort.indexOf(clean);
    if (idx !== -1) return idx;

    for (let i = 0; i < thaiFull.length; i++) {
        if (clean.includes(thaiFull[i].toUpperCase()) || thaiFull[i].toUpperCase().includes(clean)) {
            return i;
        }
    }
    return 0;
}

let lastUserDashboardLogsHash = "";
let lastAdminDashboardLogsHash = "";

function loadDashboardData(isSilent = false) {
    if (!currentUser) return;

    const empNameEl = document.getElementById("dash-emp-name");
    const empDetailsEl = document.getElementById("dash-emp-details");
    const quotaUsedEl = document.getElementById("dash-quota-used");
    const quotaBarEl = document.getElementById("dash-quota-bar");
    const quotaTextEl = document.getElementById("dash-quota-text");
    const upcomingDateEl = document.getElementById("dash-upcoming-date");
    const upcomingSubEl = document.getElementById("dash-upcoming-sub");

    if (empNameEl) empNameEl.textContent = currentUser.initialName + (currentUser.employeeEnglish ? (" (" + currentUser.employeeEnglish + ")") : "");
    if (empDetailsEl) empDetailsEl.textContent = (currentUser.position || "Operator") + " | Team " + (currentUser.team || "-") + " | Concourse " + (currentUser.concourse || "C/F");

    const loadingEl = document.getElementById("dashboard-history-loading");
    const emptyEl = document.getElementById("dashboard-history-empty");
    const tbodyEl = document.getElementById("dash-history-tbody");

    const userHasRows = tbodyEl && tbodyEl.children.length > 0;
    if (!isSilent && !userHasRows) {
        if (loadingEl) loadingEl.classList.remove("hidden");
        if (emptyEl) emptyEl.classList.add("hidden");
        if (tbodyEl) tbodyEl.innerHTML = "";
    }

    const activeYear = parseInt(document.getElementById("select-year") ? document.getElementById("select-year").value : "2027");

    // ===== FAST SINGLE API CALL: Fetch all 12 months for team in 1 request =====
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const cleanInitial = currentUser.initialName.trim().toUpperCase();

    // Primary call: getUserBookingHistory for current logged-in user
    callGasApi("getUserBookingHistory", ["ALL", cleanInitial])
        .then(histRes => {
            let allLogs = (histRes && Array.isArray(histRes.personalLogs)) ? histRes.personalLogs : [];

            // Fallback: If getUserBookingHistory returns empty, try fetchBookings across ALL teams & months
            if (allLogs.length === 0) {
                return callGasApi("fetchBookings", [currentUser.position, "ALL", -1, activeYear])
                    .then(slots => {
                        const fallbackLogs = [];
                        if (slots && Array.isArray(slots)) {
                            slots.forEach(slot => {
                                if (slot.initialName && slot.initialName.toString().trim() !== "") {
                                    const cellValue = slot.initialName.toString().trim();
                                    const cellUpper = cellValue.toUpperCase();
                                    const baseValue = cellUpper.replace(/\s*\(ADMIN\)$/i, "");
                                    if (baseValue === cleanInitial) {
                                        const bookedByAdmin = /\(Admin\)/i.test(cellValue);
                                        const mIdx = parseMonthIndex(slot.month);
                                        const mStr = monthNames[mIdx] || "JAN";
                                        fallbackLogs.push({
                                            id: "SCH-" + (slot.concourse || "C") + "-" + mStr + "-" + (slot.rowNum || 0),
                                            empName: cellValue,
                                            position: "Operator",
                                            team: slot.team || currentUser.team,
                                            concourse: slot.concourse || "C",
                                            monthYear: mStr + " " + activeYear,
                                            dateRange: slot.dateRange || "",
                                            timestamp: bookedByAdmin ? "จองโดย Admin" : "อนุมัติแล้ว",
                                            isOwner: true,
                                            isBookedByAdmin: bookedByAdmin
                                        });
                                    }
                                }
                            });
                        }
                        return fallbackLogs;
                    });
            } else {
                return allLogs.map(item => {
                    const bookedByAdmin = /\(Admin\)/i.test(item.empName || "") || item.timestamp === "จองโดย Admin";
                    return {
                        ...item,
                        isBookedByAdmin: bookedByAdmin
                    };
                });
            }
        })
        .then(allLogs => {
            const currentHash = JSON.stringify(allLogs);
            if (isSilent && userHasRows && lastUserDashboardLogsHash === currentHash) {
                if (loadingEl) loadingEl.classList.add("hidden");
                return;
            }
            lastUserDashboardLogsHash = currentHash;

            // Update quota
            const used = allLogs.length;
            const remaining = Math.max(0, 5 - used);
            if (quotaUsedEl) quotaUsedEl.textContent = used;
            if (quotaBarEl) quotaBarEl.style.width = ((used / 5) * 100) + "%";
            if (quotaTextEl) quotaTextEl.textContent = "คงเหลือ " + remaining + " ช่วงเวลา";

            // Update history table
            if (loadingEl) loadingEl.classList.add("hidden");

            if (allLogs.length === 0) {
                if (emptyEl) emptyEl.classList.remove("hidden");
                if (tbodyEl) tbodyEl.innerHTML = "";
                if (upcomingDateEl) upcomingDateEl.textContent = "ไม่มีรายการพักร้อนที่กำลังจะมาถึง";
                if (upcomingSubEl) upcomingSubEl.textContent = "วางแผนพักร้อนสำหรับปี " + activeYear + " ได้ที่ตารางจอง";
                return;
            }

            if (emptyEl) emptyEl.classList.add("hidden");

            // Sort logs by month order
            allLogs.sort((a, b) => {
                const mA = parseMonthIndex(a.monthYear.split(" ")[0]);
                const mB = parseMonthIndex(b.monthYear.split(" ")[0]);
                return mA - mB;
            });

            const firstActive = allLogs[0];
            if (firstActive) {
                if (upcomingDateEl) upcomingDateEl.textContent = firstActive.dateRange + " (" + firstActive.monthYear + ")";
                if (upcomingSubEl) upcomingSubEl.textContent = "Zone: Concourse " + (firstActive.concourse || "-");
            }

            if (tbodyEl) {
                tbodyEl.innerHTML = allLogs.map(item => `
                    <tr id="dash-row-${item.id || Math.random().toString(36).substring(7)}" style="border-bottom:1px solid rgba(255,255,255,0.05);transition:opacity 0.3s ease;">
                        <td style="padding:12px 8px;"><small>${item.timestamp || "-"}</small></td>
                        <td style="padding:12px 8px;"><strong>${item.dateRange}</strong></td>
                        <td style="padding:12px 8px;">${item.monthYear}</td>
                        <td style="padding:12px 8px;"><span>Concourse ${item.concourse || "-"}</span></td>
                        <td style="padding:12px 8px;"><span>${item.isBookedByAdmin ? "👑 จองโดย Admin" : "👤 จองเอง"}</span></td>
                        <td style="padding:12px 8px;"><span style="color:#22c55e;">🟢 อนุมัติแล้ว</span></td>
                        <td style="padding:12px 8px;">
                            <button class="btn btn-danger btn-sm" style="padding: 4px 10px; font-size: 12px; background:#ef4444; border:none; border-radius:4px; color:#fff; cursor:pointer;" 
                                onclick="cancelBookingFromDashboard(this, '${item.monthYear}', '${item.dateRange}', '${item.concourse}')">
                                🗑️ ยกเลิก
                            </button>
                        </td>
                    </tr>
                `).join("");
            }
        })
        .catch(err => {
            if (loadingEl) loadingEl.classList.add("hidden");
            if (emptyEl && (!tbodyEl || tbodyEl.children.length === 0)) emptyEl.classList.remove("hidden");
            console.error("loadDashboardData error:", err);
        });

    const adminSectionEl = document.getElementById("dash-admin-section");
    const userHistorySectionEl = document.getElementById("dash-user-history-section");
    const actionBannerEl = document.getElementById("dash-action-banner");
    const adminTbodyEl = document.getElementById("dash-admin-tbody");
    const isAdminUser = currentUser.position === "Admin" || currentUser.isAdmin === true;

    if (isAdminUser) {
        if (adminSectionEl) adminSectionEl.classList.remove("hidden");
        if (userHistorySectionEl) userHistorySectionEl.classList.add("hidden");
        if (actionBannerEl) actionBannerEl.classList.add("hidden");

        const adminLoadingEl = document.getElementById("admin-history-loading");
        const adminEmptyEl = document.getElementById("admin-history-empty");
        const adminSummaryEl = document.getElementById("admin-history-summary");

        const adminHasRows = adminTbodyEl && adminTbodyEl.children.length > 0;
        if (!isSilent && !adminHasRows) {
            if (adminLoadingEl) adminLoadingEl.classList.remove("hidden");
            if (adminEmptyEl) adminEmptyEl.classList.add("hidden");
            if (adminSummaryEl) adminSummaryEl.classList.add("hidden");
            if (adminTbodyEl) adminTbodyEl.innerHTML = "";
        }

        callGasApi("getAllBookingsHistory", [])
            .then(data => {
                if (adminLoadingEl) adminLoadingEl.classList.add("hidden");
                const logs = data && data.adminLogs ? data.adminLogs : [];

                const currentAdminHash = JSON.stringify(logs);
                if (isSilent && adminHasRows && lastAdminDashboardLogsHash === currentAdminHash) {
                    return;
                }
                lastAdminDashboardLogsHash = currentAdminHash;

                window._adminAllLogs = logs;
                filterAdminBookings();
            })
            .catch(err => {
                if (adminLoadingEl) adminLoadingEl.classList.add("hidden");
                if (adminEmptyEl && (!adminTbodyEl || adminTbodyEl.children.length === 0)) adminEmptyEl.classList.remove("hidden");
                console.error("Admin history fetch error:", err);
            });
    } else {
        if (adminSectionEl) adminSectionEl.classList.add("hidden");
        if (userHistorySectionEl) userHistorySectionEl.classList.remove("hidden");
        if (actionBannerEl) actionBannerEl.classList.remove("hidden");
    }
}

function filterAdminBookings() {
    const adminTbodyEl = document.getElementById("dash-admin-tbody");
    const adminEmptyEl = document.getElementById("admin-history-empty");
    const adminSummaryEl = document.getElementById("admin-history-summary");
    const filterEl = document.getElementById("admin-team-filter");
    const allLogs = window._adminAllLogs || [];
    const selectedTeam = filterEl ? filterEl.value : "ALL";

    // Filter by team
    const logs = selectedTeam === "ALL" ? allLogs : allLogs.filter(item => (item.team || "").toUpperCase() === selectedTeam);

    // Update summary counts
    const totalCount = logs.length;
    const cCount = logs.filter(item => item.concourse === "C").length;
    const fCount = logs.filter(item => item.concourse === "F").length;

    if (document.getElementById("admin-total-count")) document.getElementById("admin-total-count").textContent = totalCount;
    if (document.getElementById("admin-c-count")) document.getElementById("admin-c-count").textContent = cCount;
    if (document.getElementById("admin-f-count")) document.getElementById("admin-f-count").textContent = fCount;

    if (adminTbodyEl) {
        if (logs.length === 0) {
            if (adminEmptyEl) adminEmptyEl.classList.remove("hidden");
            if (adminSummaryEl) adminSummaryEl.classList.add("hidden");
            adminTbodyEl.innerHTML = `<tr><td colspan="8" style="padding:20px; text-align:center; color:#94a3b8;">📋 ยังไม่มีประวัติการจองวันพักร้อนในระบบ${selectedTeam !== "ALL" ? " สำหรับ Team " + selectedTeam : ""}</td></tr>`;
        } else {
            if (adminEmptyEl) adminEmptyEl.classList.add("hidden");
            if (adminSummaryEl) adminSummaryEl.classList.remove("hidden");
            adminTbodyEl.innerHTML = logs.map((item, idx) => `
                <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
                    <td style="padding:10px 8px;"><small>${idx + 1}</small></td>
                    <td style="padding:10px 8px;"><strong>${item.empName}</strong></td>
                    <td style="padding:10px 8px;">${item.position || "Operator"} (ทีม ${item.team || "-"})</td>
                    <td style="padding:10px 8px;">Concourse ${item.concourse || "-"}</td>
                    <td style="padding:10px 8px;">${item.monthYear}</td>
                    <td style="padding:10px 8px;"><strong>${item.dateRange}</strong></td>
                    <td style="padding:10px 8px;"><span style="color:#22c55e;">🟢 ${item.timestamp || "อนุมัติแล้ว"}</span></td>
                    <td style="padding:10px 8px;">
                        <button class="btn btn-danger btn-sm" style="padding: 3px 8px; font-size: 11px; background:#ef4444; border:none; border-radius:4px; color:#fff; cursor:pointer;" 
                            onclick="cancelBookingFromDashboardAdmin(this, '${item.team}', '${item.monthYear}', '${item.dateRange}', '${item.concourse}', '${item.empName}')">
                            🗑️ ยกเลิก
                        </button>
                    </td>
                </tr>
            `).join("");
        }
    }
}

function resetTeamASlots() {
    if (!currentUser || (currentUser.position !== "Admin" && !currentUser.isAdmin)) return;
    if (!confirm("คุณต้องการรีเซ็ทตารางพักร้อนล่วงหน้าให้เป็นช่องว่างทั้งหมด ใช่หรือไม่?")) return;

    const monthIndex = parseInt(document.getElementById("select-month") ? document.getElementById("select-month").value : "0");
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const monthStr = monthNames[monthIndex] || "JAN";
    const team = currentUser.team || "A";

    callGasApi("clearAdminBookings", [team, monthStr])
        .then(res => {
            alert("รีเซ็ทตารางพักร้อนเรียบร้อยแล้ว");
            loadDashboardData();
            if (typeof loadVacationSlots === "function") {
                loadVacationSlots();
            }
        })
        .catch(err => {
            alert("เกิดข้อผิดพลาดในการรีเซ็ท: " + err.message);
        });
}

function cancelBookingFromDashboardAdmin(btnElement, empTeam, monthYearStr, dateRange, concourse, empName) {
    if (!currentUser) return;
    if (!confirm("[Admin Privileges] คุณต้องการยกเลิกการจองพนักงาน \"" + empName + "\" ช่วง \"" + dateRange + " (" + monthYearStr + ")\" ใช่หรือไม่?")) return;

    const monthParts = monthYearStr.toString().trim().split(" ");
    const monthStr = monthParts[0] || "";
    const yearVal = parseInt(monthParts[1]) || 2027;
    const monthIndex = parseMonthIndex(monthStr);

    if (btnElement) {
        btnElement.disabled = true;
        btnElement.textContent = "กำลังยกเลิก...";
    }

    const isAdminUser = currentUser.position === "Admin" || currentUser.isAdmin === true || currentUser.role === "Admin";
    const posParam = isAdminUser ? "Admin" : currentUser.position;
    const initParam = isAdminUser ? "ADMIN" : currentUser.initialName;

    callGasApi("cancelBooking", [posParam, empTeam, monthIndex, yearVal, dateRange, concourse, initParam])
        .then(() => {
            alert("ยกเลิกการจองของ " + empName + " เรียบร้อยแล้ว");
            notifyDataChanged();
            loadDashboardData();
            if (typeof loadVacationSlots === "function") {
                loadVacationSlots();
            }
        })
        .catch(err => {
            alert("ไม่สามารถยกเลิกได้: " + err.message);
            if (btnElement) {
                btnElement.disabled = false;
                btnElement.textContent = "🗑️ ยกเลิกรายการนี้";
            }
        });
}

function cancelBookingFromDashboard(btnElement, monthYearStr, dateRange, concourse) {
    if (!currentUser) return;
    if (!confirm("คุณต้องการยกเลิกการจองวันพักร้อนช่วง \"" + dateRange + " (" + monthYearStr + ")\" ใช่หรือไม่?")) return;

    const monthParts = monthYearStr.toString().trim().split(" ");
    const monthStr = monthParts[0] || "";
    const yearVal = parseInt(monthParts[1]) || 2027;
    const monthIndex = parseMonthIndex(monthStr);

    if (btnElement) {
        btnElement.disabled = true;
        btnElement.textContent = "กำลังยกเลิก...";
        const trRow = btnElement.closest("tr");
        if (trRow) trRow.style.opacity = "0.4";
    }

    const isAdminUser = currentUser.position === "Admin" || currentUser.isAdmin === true || currentUser.role === "Admin";
    const posParam = isAdminUser ? "Admin" : currentUser.position;
    const initParam = isAdminUser ? "ADMIN" : currentUser.initialName;

    callGasApi("cancelBooking", [posParam, currentUser.team, monthIndex, yearVal, dateRange, concourse, initParam])
        .then(() => {
            alert("ยกเลิกการจองพักร้อนเรียบร้อยแล้ว");
            notifyDataChanged();
            loadDashboardData();
            if (typeof loadVacationSlots === "function") {
                loadVacationSlots();
            }
        })
        .catch(err => {
            alert("ไม่สามารถยกเลิกได้: " + err.message);
            if (btnElement) {
                btnElement.disabled = false;
                btnElement.textContent = "🗑️ ยกเลิก";
                const trRow = btnElement.closest("tr");
                if (trRow) trRow.style.opacity = "1";
            }
        });
}

window._calendarSlotsCache = window._calendarSlotsCache || {};

function loadVacationSlots() {
    if (!currentUser) return;

    const monthIndex = parseInt(document.getElementById("select-month").value);
    const year = parseInt(document.getElementById("select-year").value);
    const cacheKey = `${currentUser.team}_${year}_${monthIndex}`;

    // Save expected key to avoid race conditions
    const expectedKey = cacheKey;
    window._expectedCalendarKey = expectedKey;

    if (document.getElementById("calendar-title-display")) {
        document.getElementById("calendar-title-display").textContent =
            `ตารางพักร้อนล่วงหน้า ทีม ${currentUser.team} - ${MONTHS_TH[monthIndex]} ${year}`;
    }

    const cachedData = window._calendarSlotsCache[cacheKey];
    if (cachedData && Array.isArray(cachedData)) {
        renderSlots(cachedData, monthIndex, year, true);
    } else {
        if (document.getElementById("calendar-loading")) document.getElementById("calendar-loading").classList.remove("hidden");
        if (document.getElementById("calendar-content")) document.getElementById("calendar-content").classList.add("hidden");
    }

    callGasApi("fetchBookings", [currentUser.position, currentUser.team, monthIndex, year])
        .then((result) => {
            // Discard response if user changed selection during network lag
            if (window._expectedCalendarKey !== expectedKey) {
                return;
            }
            if (result && Array.isArray(result)) {
                const prevStr = JSON.stringify(window._calendarSlotsCache[cacheKey] || []);
                const newStr = JSON.stringify(result);
                window._calendarSlotsCache[cacheKey] = result;

                const isHidden = document.getElementById("calendar-content") && document.getElementById("calendar-content").classList.contains("hidden");
                if (prevStr !== newStr || isHidden) {
                    renderSlots(result, monthIndex, year, true);
                }
            } else {
                if (document.getElementById("calendar-loading")) document.getElementById("calendar-loading").classList.add("hidden");
                if (document.getElementById("calendar-content")) document.getElementById("calendar-content").classList.remove("hidden");
            }
        })
        .catch((error) => {
            console.error("fetchBookings error:", error);
            if (window._expectedCalendarKey !== expectedKey) {
                return;
            }
            if (document.getElementById("calendar-loading")) document.getElementById("calendar-loading").classList.add("hidden");
            if (document.getElementById("calendar-content")) document.getElementById("calendar-content").classList.remove("hidden");
        });
}

function renderSlots(slots, monthIndex, year, preserveSelection = false) {
    if (document.getElementById("calendar-loading")) document.getElementById("calendar-loading").classList.add("hidden");
    if (document.getElementById("calendar-content")) document.getElementById("calendar-content").classList.remove("hidden");

    slotsData = slots;
    const operatorList = document.getElementById("operator-slots-list");
    if (!operatorList) return;

    operatorList.innerHTML = "";
    if (!preserveSelection) clearSelection();

    if (slots.length === 0) {
        operatorList.innerHTML = `<div class="warning-alert-box" style="margin-top: 0">⚠️ ยังไม่มีการกำหนดช่วงวันพักร้อนในตารางระบบสำหรับเดือนนี้</div>`;
    } else {
        const grouped = {};
        slots.forEach(slot => {
            if (!grouped[slot.dateRange]) {
                grouped[slot.dateRange] = {
                    dateRange: slot.dateRange,
                    year: slot.year,
                    cSlot: null,
                    fSlot: null
                };
            }
            if (slot.concourse === "C") grouped[slot.dateRange].cSlot = slot;
            else if (slot.concourse === "F") grouped[slot.dateRange].fSlot = slot;
        });

        Object.values(grouped).forEach(group => {
            const card = createGroupedSlotCard(group, monthIndex, year);
            operatorList.appendChild(card);
        });
    }

    if (document.getElementById("calendar-loading")) document.getElementById("calendar-loading").classList.add("hidden");
    if (document.getElementById("calendar-content")) document.getElementById("calendar-content").classList.remove("hidden");
}

function createGroupedSlotCard(group, monthIndex, year) {
    const card = document.createElement("div");
    card.className = "slot-card animate-fade-in";

    const leftDiv = document.createElement("div");
    leftDiv.className = "slot-card-left";

    const monthThMap = {
        "JAN": "ม.ค.", "FEB": "ก.พ.", "MAR": "มี.ค.", "APR": "เม.ย.",
        "MAY": "พ.ค.", "JUN": "มิ.ย.", "JUL": "ก.ค.", "AUG": "ส.ค.",
        "SEP": "ก.ย.", "OCT": "ต.ค.", "NOV": "พ.ย.", "DEC": "ธ.ค."
    };
    const monthShort = MONTHS_ENG_SHORT[monthIndex].toUpperCase();
    const monthTh = monthThMap[monthShort] || monthShort;

    const displayDate = group.dateRange.replace("วันที่ ", "") + " " + monthTh;

    const dateTitle = document.createElement("span");
    dateTitle.className = "slot-card-date";
    dateTitle.textContent = displayDate;

    const yearSub = document.createElement("span");
    yearSub.className = "slot-card-year";
    yearSub.textContent = "ปี ค.ศ. " + group.year;

    leftDiv.appendChild(dateTitle);
    leftDiv.appendChild(yearSub);
    card.appendChild(leftDiv);

    const zonesDiv = document.createElement("div");
    zonesDiv.className = "slot-card-right-zones";

    const firstDay = parseFirstDayFromDateRange(group.dateRange);
    const bookingAllowed = checkBookingTimelineAllowed(mockTodayDate, year, monthIndex, firstDay);

    ["C", "F"].forEach(conc => {
        const slot = (conc === "C") ? group.cSlot : group.fSlot;
        const zone = document.createElement("div");
        zone.className = `concourse-zone ${conc.toLowerCase()}-zone`;

        const label = document.createElement("span");
        label.className = "zone-label";
        label.textContent = `Concourse ${conc}`;
        zone.appendChild(label);

        const val = document.createElement("span");
        val.className = "zone-value";
        zone.appendChild(val);

        if (slot) {
            if (slot.initialName) {
                val.textContent = slot.initialName;
                zone.classList.add(conc === "C" ? "booked-c" : "booked-f");
                const isSlotOwner = slot.initialName.trim().toLowerCase() === currentUser.initialName.toLowerCase();
                const isAdminUser = currentUser.position === "Admin" || currentUser.isAdmin === true;
                if (isSlotOwner || isAdminUser) {
                    zone.style.cursor = "pointer";
                    zone.title = isAdminUser ? `[Admin] จัดการรายการจองของ ${slot.initialName}` : `จัดการการจองของคุณ`;
                    zone.addEventListener("click", () => {
                        openEditModal(slot, bookingAllowed);
                    });
                } else {
                    zone.classList.add("disabled");
                    zone.title = `จองแล้วโดย ${slot.initialName}`;
                }
            } else {
                if (!bookingAllowed) {
                    val.textContent = "หมดเขตจอง";
                    zone.classList.add("disabled", "disabled-zone");
                } else {
                    const isAdminUser = currentUser.position === "Admin" || currentUser.isAdmin === true || currentUser.role === "Admin";
                    if (!isAdminUser && currentUser.position === "Operator" && currentUser.concourse !== conc) {
                        val.textContent = "ต่าง Concourse";
                        zone.classList.add("disabled");
                    } else {
                        val.textContent = isAdminUser ? "ว่าง (จองแทนคลิก)" : "ว่าง (จองคลิก)";
                        zone.classList.add("available");
                        if (selectedSlot && selectedSlot.rowNum == slot.rowNum && selectedSlot.concourse === slot.concourse) {
                            zone.classList.add("selected-zone");
                        }
                        zone.addEventListener("click", () => {
                            handleSlotSelect(zone, slot);
                        });
                    }
                }
            }
        } else {
            val.textContent = "ไม่มีตาราง";
            zone.classList.add("disabled");
        }
        zonesDiv.appendChild(zone);
    });

    card.appendChild(zonesDiv);
    return card;
}

function handleSlotSelect(zoneElement, slot) {
    if (zoneElement.classList.contains("selected-zone")) {
        clearSelection();
    } else {
        clearSelection();
        zoneElement.classList.add("selected-zone");
        selectedSlot = slot;
        if (document.getElementById("btn-confirm-booking")) document.getElementById("btn-confirm-booking").disabled = false;
        if (document.getElementById("booking-summary-text")) {
            const isAdminUser = currentUser && (currentUser.position === "Admin" || currentUser.isAdmin === true || currentUser.role === "Admin");
            if (isAdminUser) {
                document.getElementById("booking-summary-text").innerHTML =
                    `👑 เลือกจองแทนพนักงาน: <strong>${slot.dateRange} (Concourse ${slot.concourse})</strong> | ทีม <strong>${currentUser.team}</strong>`;
            } else {
                document.getElementById("booking-summary-text").innerHTML =
                    `เลือกจอง: <strong>${slot.dateRange} (Concourse ${slot.concourse})</strong> ให้กับ: <strong>${currentUser.initialName}</strong>`;
            }
        }
    }
}

function clearSelection() {
    document.querySelectorAll(".concourse-zone.selected-zone").forEach(z => {
        z.classList.remove("selected-zone");
    });
    selectedSlot = null;
    if (document.getElementById("btn-confirm-booking")) document.getElementById("btn-confirm-booking").disabled = true;
    if (document.getElementById("booking-summary-text")) document.getElementById("booking-summary-text").innerHTML = "กรุณาเลือกช่วงวันในรายการเพื่อทำการจอง...";
}

function checkBookingTimelineAllowed(todayDate, targetYear, targetMonthIndex, firstDay) {
    let deadlineYear = targetYear;
    let deadlineMonth = targetMonthIndex - 1;
    if (deadlineMonth < 0) {
        deadlineMonth = 11;
        deadlineYear--;
    }
    const deadlineDate = new Date(deadlineYear, deadlineMonth, 10, 23, 59, 59);
    return todayDate <= deadlineDate;
}

function openBookingModal() {
    if (!selectedSlot || !currentUser) return;
    const isAdminUser = currentUser.position === "Admin" || currentUser.isAdmin === true || currentUser.role === "Admin";

    if (document.getElementById("confirm-emp-name")) {
        document.getElementById("confirm-emp-name").textContent = isAdminUser
            ? "ผู้ดูแลระบบ (Admin)"
            : currentUser.initialName + " (" + currentUser.employeeEnglish + ")";
    }
    if (document.getElementById("confirm-position")) document.getElementById("confirm-position").textContent = currentUser.position;
    if (document.getElementById("confirm-team")) document.getElementById("confirm-team").textContent = "Team " + currentUser.team;

    const monthIndex = parseInt(document.getElementById("select-month").value);
    if (document.getElementById("confirm-date")) {
        document.getElementById("confirm-date").textContent =
            selectedSlot.dateRange + " " + MONTHS_TH[monthIndex] + " " + selectedSlot.year;
    }
    if (document.getElementById("confirm-concourse-row")) document.getElementById("confirm-concourse-row").classList.remove("hidden");
    if (document.getElementById("confirm-concourse")) document.getElementById("confirm-concourse").textContent = "Concourse " + selectedSlot.concourse;

    const adminFields = document.getElementById("admin-booking-fields");
    const warningBox = document.getElementById("modal-warning-box");
    const submitBtn = document.getElementById("btn-modal-submit");

    if (isAdminUser) {
        if (adminFields) {
            adminFields.classList.remove("hidden");
            const targetInput = document.getElementById("admin-target-initial");
            if (targetInput) targetInput.value = "";
        }
        if (warningBox) {
            warningBox.classList.remove("hidden");
            warningBox.innerHTML = `👑 <strong>ผู้ดูแลระบบ (Admin):</strong> ท่านกำลังเลือกจองวันลาพักร้อนแทนพนักงานสำหรับ ทีม <strong>${currentUser.team}</strong> | Concourse <strong>${selectedSlot.concourse}</strong>`;
        }
        if (submitBtn) submitBtn.disabled = false;
        showModal("booking-modal");
    } else {
        if (adminFields) adminFields.classList.add("hidden");
        if (warningBox) {
            warningBox.classList.remove("hidden");
            warningBox.innerHTML = "⏳ กำลังตรวจสอบสิทธิ์การจอง...";
        }
        if (submitBtn) submitBtn.disabled = true;

        showModal("booking-modal");

        callGasApi("getUserYearBookingCount", [currentUser.team, selectedSlot.year, currentUser.initialName])
            .then(count => {
                const cnt = parseInt(count) || 0;
                if (cnt >= 5) {
                    if (warningBox) warningBox.innerHTML = `❌ <strong>ข้อจำกัดสิทธิ์:</strong> คุณได้จองพักร้อนครบ 5 ช่วงเวลาสำหรับปี ค.ศ. ${selectedSlot.year} แล้ว`;
                    if (submitBtn) submitBtn.disabled = true;
                } else {
                    if (warningBox) warningBox.innerHTML = `ℹ️ <strong>โควตาจองรายปี:</strong> ปี ค.ศ. ${selectedSlot.year} คุณใช้สิทธิ์ไปแล้ว <strong>${cnt}/5 ช่วงเวลา</strong>`;
                    if (submitBtn) submitBtn.disabled = false;
                }
            })
            .catch(err => {
                if (warningBox) warningBox.innerHTML = `ℹ️ พร้อมสำหรับการบันทึกการจอง`;
                if (submitBtn) submitBtn.disabled = false;
            });
    }
}

function submitBookingData() {
    if (!selectedSlot || !currentUser) return;
    const isAdminUser = currentUser.position === "Admin" || currentUser.isAdmin === true || currentUser.role === "Admin";

    let bookingInitial = currentUser.initialName;
    let isBookedByAdmin = false;

    if (isAdminUser) {
        const targetInput = document.getElementById("admin-target-initial");
        const val = targetInput ? targetInput.value.trim().toUpperCase() : "";
        if (!val) {
            alert("กรุณากรอกชื่อย่อพนักงานที่ต้องการจองแทน");
            if (targetInput) targetInput.focus();
            return;
        }
        bookingInitial = val + " (Admin)";
        isBookedByAdmin = true;
    }

    const monthIndex = parseInt(document.getElementById("select-month").value);
    const submitBtn = document.getElementById("btn-modal-submit");
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "กำลังบันทึก...";
    }

    callGasApi("submitBooking", [
        currentUser.position,
        selectedSlot.team || currentUser.team,
        monthIndex,
        selectedSlot.year,
        selectedSlot.dateRange,
        selectedSlot.concourse,
        bookingInitial,
        currentUser.employeeEnglish || "Administrator",
        isBookedByAdmin
    ])
        .then((result) => {
            closeModal("booking-modal");
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = "ยืนยันการจอง";
            }
            if (document.getElementById("success-message-text")) {
                document.getElementById("success-message-text").innerHTML =
                    `ระบบได้บันทึกการจองวันพักร้อนแทนพนักงานเรียบร้อยแล้ว<br>ชื่อย่อพนักงาน: <strong>${bookingInitial}</strong><br>ช่วงวัน: <strong>${selectedSlot.dateRange}</strong> Concourse ${selectedSlot.concourse}`;
            }
            showSuccessPopup();
            notifyDataChanged();
            loadVacationSlots();
        })
        .catch((error) => {
            alert("ไม่สามารถทำการบันทึก: " + error.message);
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = "ยืนยันการจอง";
            }
        });
}

function openEditModal(slot, bookingAllowed) {
    if (!currentUser) return;

    if (document.getElementById("edit-emp-name")) document.getElementById("edit-emp-name").textContent = slot.initialName;
    if (document.getElementById("edit-details")) document.getElementById("edit-details").textContent = `${slot.position} | ทีม ${slot.team || currentUser.team}`;

    const monthIdxFromSlot = (slot && slot.month) ? parseMonthIndex(slot.month) : parseInt(document.getElementById("select-month").value);
    if (document.getElementById("edit-date")) document.getElementById("edit-date").textContent = slot.dateRange + " " + MONTHS_TH[monthIdxFromSlot] + " " + slot.year;

    if (document.getElementById("edit-concourse-row")) document.getElementById("edit-concourse-row").classList.remove("hidden");
    if (document.getElementById("edit-concourse")) document.getElementById("edit-concourse").textContent = "Concourse " + slot.concourse;

    const deleteBtn = document.getElementById("btn-modal-delete");
    const warningBox = document.getElementById("edit-warning-box");

    if (deleteBtn) {
        deleteBtn.dataset.rowNum = slot.rowNum;
        deleteBtn.dataset.dateRange = slot.dateRange;
        deleteBtn.dataset.concourse = slot.concourse || "";
        deleteBtn.dataset.year = slot.year;
        deleteBtn.dataset.initialName = slot.initialName;
        deleteBtn.dataset.team = slot.team || currentUser.team;
        deleteBtn.dataset.monthIndex = monthIdxFromSlot;
        deleteBtn.disabled = false;
    }

    const isAdminUser = currentUser.position === "Admin" || currentUser.isAdmin === true || currentUser.role === "Admin";
    if (warningBox) {
        if (isAdminUser) {
            warningBox.classList.remove("hidden");
            warningBox.innerHTML = `👑 <strong>ผู้ดูแลระบบ (Admin):</strong> ท่านมีสิทธิ์ยกเลิกการจองรายการนี้แทนพนักงาน`;
        } else {
            warningBox.classList.add("hidden");
        }
    }

    showModal("edit-modal");
}

function cancelBookingData() {
    const deleteBtn = document.getElementById("btn-modal-delete");
    if (!deleteBtn) return;

    const dateRange = deleteBtn.dataset.dateRange;
    const concourse = deleteBtn.dataset.concourse || "";
    const year = deleteBtn.dataset.year;
    const team = deleteBtn.dataset.team || currentUser.team;
    const monthIndex = (deleteBtn.dataset.monthIndex !== undefined && deleteBtn.dataset.monthIndex !== "")
        ? parseInt(deleteBtn.dataset.monthIndex)
        : parseInt(document.getElementById("select-month").value);

    deleteBtn.disabled = true;
    deleteBtn.textContent = "กำลังดำเนินการยกเลิก...";

    const isAdminUser = currentUser.position === "Admin" || currentUser.isAdmin === true || currentUser.role === "Admin";
    const posParam = isAdminUser ? "Admin" : currentUser.position;
    const initParam = isAdminUser ? "ADMIN" : currentUser.initialName;

    const rowNum = deleteBtn.dataset.rowNum ? parseInt(deleteBtn.dataset.rowNum) : -1;

    callGasApi("cancelBooking", [posParam, team, monthIndex, year, dateRange, concourse, initParam, rowNum])
        .then((result) => {
            closeModal("edit-modal");
            deleteBtn.disabled = false;
            deleteBtn.textContent = "🗑 ยกเลิกการจองนี้";
            if (document.getElementById("success-message-text")) {
                document.getElementById("success-message-text").innerHTML =
                    `ยกเลิกรายการลาพักร้อนช่วงวัน <strong>${dateRange}</strong> เรียบร้อยแล้ว`;
            }
            showSuccessPopup();
            notifyDataChanged();
            loadVacationSlots();
        })
        .catch((error) => {
            alert("เกิดข้อผิดพลาดในการยกเลิกการจอง: " + error.message);
            deleteBtn.disabled = false;
            deleteBtn.textContent = "🗑 ยกเลิกการจองนี้";
        });
}

function showModal(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove("hidden");
}

function closeModal(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add("hidden");
}

function showSuccessPopup() {
    const el = document.getElementById("success-popup");
    if (el) el.classList.remove("hidden");
}

function closeSuccessPopup() {
    const el = document.getElementById("success-popup");
    if (el) el.classList.add("hidden");
}

function parseFirstDayFromDateRange(dateRange) {
    const matches = dateRange.match(/\d+/);
    return matches ? parseInt(matches[0]) : 1;
}

function getLocalDateString(dateObj) {
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function clearAllAdminBookingsAction() {
    if (!currentUser) return;
    const isAdminUser = currentUser.position === "Admin" || currentUser.isAdmin === true || currentUser.role === "Admin";
    if (!isAdminUser) {
        alert("เฉพาะผู้ดูแลระบบ (Admin) เท่านั้นที่สามารถยกเลิกการจองทั้งหมดได้");
        return;
    }

    if (!confirm("⚠️ คุณต้องการยกเลิกรายการจองวันพักร้อนทั้งหมดที่จองโดย Admin ใช่หรือไม่?")) return;

    callGasApi("clearAllAdminBookings", [])
        .then((res) => {
            alert("ยกเลิกรายการจองที่จองโดย Admin ทั้งหมดเรียบร้อยแล้ว");
            notifyDataChanged();
            if (typeof loadVacationSlots === "function") loadVacationSlots();
            if (typeof loadDashboardData === "function") loadDashboardData();
        })
        .catch(err => {
            alert("เกิดข้อผิดพลาดในการยกเลิก: " + err.message);
        });
}

function clearCurrentTeamMonthBookingsAction() {
    if (!currentUser) return;
    const isAdminUser = currentUser.position === "Admin" || currentUser.isAdmin === true || currentUser.role === "Admin";
    if (!isAdminUser) {
        alert("เฉพาะผู้ดูแลระบบ (Admin) เท่านั้นที่สามารถยกเลิกการจองตารางได้");
        return;
    }

    const monthIndex = parseInt(document.getElementById("select-month").value);
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const monthStr = monthNames[monthIndex] || "JAN";
    const team = currentUser.team || "A";

    if (!confirm(`⚠️ คุณต้องการยกเลิกรายชื่อที่จองในตารางพักร้อนล่วงหน้า ทีม ${team} - ${MONTHS_TH[monthIndex]} 2027 ใช่หรือไม่?`)) return;

    callGasApi("clearAdminBookings", [team, monthStr])
        .then((res) => {
            alert(`ยกเลิกรายชื่อที่จองในตาราง ทีม ${team} - ${MONTHS_TH[monthIndex]} เรียบร้อยแล้ว`);
            notifyDataChanged();
            if (typeof loadVacationSlots === "function") loadVacationSlots();
            if (typeof loadDashboardData === "function") loadDashboardData();
        })
        .catch(err => {
            alert("เกิดข้อผิดพลาดในการยกเลิก: " + err.message);
        });
}