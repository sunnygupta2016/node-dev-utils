"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZodiacSignCalculator = exports.AgeCalculator = exports.CryptoService = exports.OTPGenerator = exports.getCountryFromCode = exports.IsEqualArrays = void 0;
var data = {
    "AF": "Afghanistan",
    "AX": "Åland Islands",
    "AL": "Albania",
    "DZ": "Algeria",
    "AS": "American Samoa",
    "AD": "Andorra",
    "AO": "Angola",
    "AI": "Anguilla",
    "AQ": "Antarctica",
    "AG": "Antigua and Barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AW": "Aruba",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BS": "Bahamas",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BY": "Belarus",
    "BE": "Belgium",
    "BZ": "Belize",
    "BJ": "Benin",
    "BM": "Bermuda",
    "BT": "Bhutan",
    "BO": "Bolivia",
    "BA": "Bosnia and Herzegovina",
    "BW": "Botswana",
    "BV": "Bouvet Island",
    "BR": "Brazil",
    "IO": "British Indian Ocean Territory",
    "BN": "Brunei Darussalam",
    "BG": "Bulgaria",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "KH": "Cambodia",
    "CM": "Cameroon",
    "CA": "Canada",
    "CV": "Cape Verde",
    "KY": "Cayman Islands",
    "CF": "Central African Republic",
    "TD": "Chad",
    "CL": "Chile",
    "CN": "China",
    "CX": "Christmas Island",
    "CC": "Cocos (Keeling) Islands",
    "CO": "Colombia",
    "KM": "Comoros",
    "CG": "Congo",
    "CD": "Democratic Republic of the Congo",
    "CK": "Cook Islands",
    "CR": "Costa Rica",
    "CI": "Cote D'Ivoire",
    "HR": "Croatia",
    "CU": "Cuba",
    "CY": "Cyprus",
    "CZ": "Czech Republic",
    "DK": "Denmark",
    "DJ": "Djibouti",
    "DM": "Dominica",
    "DO": "Dominican Republic",
    "EC": "Ecuador",
    "EG": "Egypt",
    "SV": "El Salvador",
    "GQ": "Equatorial Guinea",
    "ER": "Eritrea",
    "EE": "Estonia",
    "ET": "Ethiopia",
    "FK": "Falkland Islands (Malvinas)",
    "FO": "Faroe Islands",
    "FJ": "Fiji",
    "FI": "Finland",
    "FR": "France",
    "GF": "French Guiana",
    "PF": "French Polynesia",
    "TF": "French Southern Territories",
    "GA": "Gabon",
    "GM": "Gambia",
    "GE": "Georgia",
    "DE": "Germany",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GR": "Greece",
    "GL": "Greenland",
    "GD": "Grenada",
    "GP": "Guadeloupe",
    "GU": "Guam",
    "GT": "Guatemala",
    "GG": "Guernsey",
    "GN": "Guinea",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HT": "Haiti",
    "HM": "Heard Island and Mcdonald Islands",
    "VA": "Vatican City",
    "HN": "Honduras",
    "HI": "Hawaii",
    "HK": "Hong Kong",
    "HU": "Hungary",
    "IS": "Iceland",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "Iran",
    "IQ": "Iraq",
    "IE": "Ireland",
    "IM": "Isle of Man",
    "IL": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JP": "Japan",
    "JE": "Jersey",
    "JO": "Jordan",
    "KZ": "Kazakhstan",
    "KE": "Kenya",
    "KI": "Kiribati",
    "KP": "Korea",
    "KR": "South Korea",
    "KW": "Kuwait",
    "KG": "Kyrgyzstan",
    "LA": "Lao People'S Democratic Republic",
    "LV": "Latvia",
    "LB": "Lebanon",
    "LS": "Lesotho",
    "LR": "Liberia",
    "LY": "Libya",
    "LI": "Liechtenstein",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MO": "Macao",
    "MK": "Macedonia",
    "MG": "Madagascar",
    "MW": "Malawi",
    "MY": "Malaysia",
    "MV": "Maldives",
    "ML": "Mali",
    "MT": "Malta",
    "MH": "Marshall Islands",
    "MQ": "Martinique",
    "MR": "Mauritania",
    "MU": "Mauritius",
    "YT": "Mayotte",
    "MX": "Mexico",
    "FM": "Micronesia",
    "MD": "Moldova",
    "MC": "Monaco",
    "MN": "Mongolia",
    "ME": "Montenegro",
    "MS": "Montserrat",
    "MA": "Morocco",
    "MZ": "Mozambique",
    "MM": "Myanmar",
    "NA": "Namibia",
    "NR": "Nauru",
    "NP": "Nepal",
    "NL": "Netherlands",
    "AN": "Netherlands Antilles",
    "NC": "New Caledonia",
    "NZ": "New Zealand",
    "NI": "Nicaragua",
    "NE": "Niger",
    "NG": "Nigeria",
    "NU": "Niue",
    "NF": "Norfolk Island",
    "MP": "Northern Mariana Islands",
    "NO": "Norway",
    "OM": "Oman",
    "PK": "Pakistan",
    "PW": "Palau",
    "PS": "Palestinian Territory, Occupied",
    "PA": "Panama",
    "PG": "Papua New Guinea",
    "PY": "Paraguay",
    "PE": "Peru",
    "PH": "Philippines",
    "PN": "Pitcairn",
    "PL": "Poland",
    "PT": "Portugal",
    "PR": "Puerto Rico",
    "QA": "Qatar",
    "RE": "Reunion",
    "RO": "Romania",
    "RU": "Russia",
    "RW": "RWANDA",
    "SH": "Saint Helena",
    "KN": "Saint Kitts and Nevis",
    "LC": "Saint Lucia",
    "PM": "Saint Pierre and Miquelon",
    "VC": "Saint Vincent and the Grenadines",
    "WS": "Samoa",
    "SCT": "Scotland",
    "SM": "San Marino",
    "ST": "Sao Tome and Principe",
    "SA": "Saudi Arabia",
    "SN": "Senegal",
    "CS": "Serbia",
    "SC": "Seychelles",
    "SL": "Sierra Leone",
    "SG": "Singapore",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "SB": "Solomon Islands",
    "SO": "Somalia",
    "ZA": "South Africa",
    "GS": "South Georgia and the South Sandwich Islands",
    "ES": "Spain",
    "LK": "Sri Lanka",
    "SD": "Sudan",
    "SR": "Suriname",
    "SJ": "Svalbard and Jan Mayen",
    "SZ": "Swaziland",
    "SE": "Sweden",
    "CH": "Switzerland",
    "SY": "Syria",
    "TW": "Taiwan",
    "TJ": "Tajikistan",
    "TZ": "Tanzania",
    "TH": "Thailand",
    "TL": "Timor-Leste",
    "TG": "Togo",
    "TK": "Tokelau",
    "TO": "Tonga",
    "TT": "Trinidad and Tobago",
    "TN": "Tunisia",
    "TR": "Turkey",
    "TM": "Turkmenistan",
    "TC": "Turks and Caicos Islands",
    "TV": "Tuvalu",
    "UG": "Uganda",
    "UA": "Ukraine",
    "AE": "United Arab Emirates",
    "GB": "United Kingdom",
    "US": "United States",
    "UM": "United States Minor Outlying Islands",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VU": "Vanuatu",
    "VE": "Venezuela",
    "VN": "Viet Nam",
    "VG": "Virgin Islands, British",
    "VI": "Virgin Islands, U.S.",
    "WF": "Wallis and Futuna",
    "EH": "Western Sahara",
    "YE": "Yemen",
    "ZM": "Zambia",
    "ZW": "Zimbabwe"
};
function IsEqualArrays(a, b) {
    if ((a === b) || (a == null && b == null) || (Array.isArray(a) && a.length == 0 && Array.isArray(b) && b.length == 0))
        return true;
    if (a == null || b == null)
        return false;
    if (a.length != b.length)
        return false;
    for (var i = 0; i < a.length; ++i) {
        //for object id
        if (typeof a[i] != typeof b[i])
            return false;
        if (typeof a[i] == 'object') {
            if (JSON.stringify(a[i]) != JSON.stringify(b[i]))
                return false;
        }
        else if (a[i] !== b[i])
            return false;
    }
    return true;
}
exports.IsEqualArrays = IsEqualArrays;
function getCountryFromCode(code) {
    return data[code];
}
exports.getCountryFromCode = getCountryFromCode;
var OTPGenerator = /** @class */ (function () {
    function OTPGenerator() {
    }
    OTPGenerator.prototype.generateRandomString = function (characters, length) {
        var result = '';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            var randomIndex = Math.floor(Math.random() * charactersLength);
            result += characters.charAt(randomIndex);
        }
        return result;
    };
    OTPGenerator.prototype.generateNumericOTP = function (length) {
        return this.generateRandomString(OTPGenerator.NUMERIC, length);
    };
    OTPGenerator.prototype.generateCharacterOTP = function (length) {
        return this.generateRandomString(OTPGenerator.CHARACTERS, length);
    };
    OTPGenerator.prototype.generateAlphanumericOTP = function (length) {
        // Ensure at least one numeric character
        var numericCharacter = this.generateRandomString(OTPGenerator.NUMERIC, 1);
        var remainingLength = length - 1;
        var alphanumericPart = this.generateRandomString(OTPGenerator.ALPHANUMERIC, remainingLength);
        return numericCharacter + alphanumericPart;
    };
    OTPGenerator.NUMERIC = '0123456789';
    OTPGenerator.CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    OTPGenerator.ALPHANUMERIC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return OTPGenerator;
}());
exports.OTPGenerator = OTPGenerator;
var CryptoJS = __importStar(require("crypto-js"));
var CryptoService = /** @class */ (function () {
    function CryptoService(encryptionKey, Iv) {
        this.encryptionKey = encryptionKey;
        this.Iv = Iv;
    }
    CryptoService.prototype.encrypt = function (text) {
        var cipherText = CryptoJS.AES.encrypt(text, this.encryptionKey, { Iv: this.Iv }).toString();
        return cipherText;
    };
    CryptoService.prototype.decrypt = function (cipherText) {
        var decryptedBytes = CryptoJS.AES.decrypt(cipherText, this.encryptionKey, { Iv: this.Iv });
        var decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
        return decryptedText;
    };
    return CryptoService;
}());
exports.CryptoService = CryptoService;
var AgeCalculator = /** @class */ (function () {
    function AgeCalculator(birthDateTime) {
        this.validateBirthDateTime(birthDateTime);
        this.birthDateTime = birthDateTime;
    }
    AgeCalculator.prototype.validateBirthDateTime = function (birthDateTime) {
        var currentDateTime = new Date();
        if (isNaN(birthDateTime.getTime()) ||
            birthDateTime > currentDateTime ||
            birthDateTime.getFullYear() < 1900) {
            throw new Error('Invalid birth date and time. Please enter a valid date and time before the current date.');
        }
    };
    AgeCalculator.prototype.getAge = function () {
        var currentDateTime = new Date();
        var birthYear = this.birthDateTime.getFullYear();
        var currentYear = currentDateTime.getFullYear();
        var age = currentYear - birthYear;
        // Adjust age based on the birth month, day, and time (if available)
        if (currentDateTime.getMonth() < this.birthDateTime.getMonth() ||
            (currentDateTime.getMonth() === this.birthDateTime.getMonth() &&
                (currentDateTime.getDate() < this.birthDateTime.getDate() ||
                    (currentDateTime.getDate() === this.birthDateTime.getDate() &&
                        (this.birthDateTime.getHours() !== 0 ||
                            currentDateTime.getHours() < this.birthDateTime.getHours()))))) {
            age--;
        }
        return age;
    };
    return AgeCalculator;
}());
exports.AgeCalculator = AgeCalculator;
var ZodiacSignCalculator = /** @class */ (function (_super) {
    __extends(ZodiacSignCalculator, _super);
    function ZodiacSignCalculator(birthDateTime) {
        return _super.call(this, birthDateTime) || this;
    }
    ZodiacSignCalculator.prototype.getZodiacSign = function () {
        var month = this.birthDateTime.getMonth() + 1; // JavaScript months are 0-based
        var day = this.birthDateTime.getDate();
        if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
            return 'Aries';
        }
        else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
            return 'Taurus';
        }
        else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
            return 'Gemini';
        }
        else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
            return 'Cancer';
        }
        else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
            return 'Leo';
        }
        else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
            return 'Virgo';
        }
        else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
            return 'Libra';
        }
        else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
            return 'Scorpio';
        }
        else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
            return 'Sagittarius';
        }
        else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
            return 'Capricorn';
        }
        else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
            return 'Aquarius';
        }
        else {
            return 'Pisces';
        }
    };
    return ZodiacSignCalculator;
}(AgeCalculator));
exports.ZodiacSignCalculator = ZodiacSignCalculator;
