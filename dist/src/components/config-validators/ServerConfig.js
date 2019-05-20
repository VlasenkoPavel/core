"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const class_validator_1 = require("class-validator");
const config_1 = require("@c7s/config");
let ServerConfig = class ServerConfig extends config_1.ServerConfig {
};
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.Matches(/^(([a-z0-9]*)|(\.\/)|((\.\.\/)*))(\/*([a-z0-9]+\/)*)/),
    __metadata("design:type", String)
], ServerConfig.prototype, "controllers", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.Matches(/^(([a-z0-9]*)|(\.\/)|((\.\.\/)*))(\/*([a-z0-9]+\/)*)/),
    __metadata("design:type", String)
], ServerConfig.prototype, "public", void 0);
ServerConfig = __decorate([
    inversify_1.injectable()
], ServerConfig);
exports.ServerConfig = ServerConfig;
//# sourceMappingURL=ServerConfig.js.map