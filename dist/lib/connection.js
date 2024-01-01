"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDBConnection = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var MongoDBConnection = /** @class */ (function () {
    function MongoDBConnection() {
        this.mongoose = mongoose_1.default;
    }
    MongoDBConnection.prototype.connect = function (databaseUrl, dbName) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (!dbName) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.mongoose.connect("".concat(databaseUrl, "/").concat(dbName))];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.mongoose.connect(databaseUrl)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        console.log('Connected to MongoDB');
                        return [2 /*return*/, this.mongoose.connection];
                    case 5:
                        error_1 = _a.sent();
                        console.error('Error connecting to MongoDB:', error_1);
                        throw error_1;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    MongoDBConnection.prototype.listDatabases = function () {
        return __awaiter(this, void 0, void 0, function () {
            var adminDb, databases, databaseNames, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        adminDb = this.mongoose.connection.db.admin();
                        return [4 /*yield*/, adminDb.listDatabases()];
                    case 1:
                        databases = _a.sent();
                        databaseNames = databases.databases.map(function (db) { return db.name; });
                        return [2 /*return*/, databaseNames];
                    case 2:
                        error_2 = _a.sent();
                        console.error('Error listing databases:', error_2);
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MongoDBConnection.prototype.listCollections = function () {
        return __awaiter(this, void 0, void 0, function () {
            var collections, collectionNames, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.mongoose.connection.db.listCollections().toArray()];
                    case 1:
                        collections = _a.sent();
                        collectionNames = collections.map(function (collection) { return collection.name; });
                        return [2 /*return*/, collectionNames];
                    case 2:
                        error_3 = _a.sent();
                        console.error('Error listing collections:', error_3);
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MongoDBConnection.prototype.getCollectionSize = function (dbName, collectionName) {
        return __awaiter(this, void 0, void 0, function () {
            var db, collectionSizeInBytes, collectionSizeInMB, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        db = this.mongoose.connection.useDb(dbName);
                        return [4 /*yield*/, db.collection(collectionName).estimatedDocumentCount()];
                    case 1:
                        collectionSizeInBytes = _a.sent();
                        collectionSizeInMB = collectionSizeInBytes / (1024 * 1024);
                        return [2 /*return*/, collectionSizeInMB];
                    case 2:
                        error_4 = _a.sent();
                        console.error("Error getting size of collection ".concat(collectionName, ":"), error_4);
                        throw error_4;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MongoDBConnection.prototype.disconnect = function () {
        this.mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    };
    return MongoDBConnection;
}());
exports.MongoDBConnection = MongoDBConnection;
