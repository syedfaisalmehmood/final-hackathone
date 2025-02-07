"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
const client_1 = require("@sanity/client");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.client = (0, client_1.createClient)({
  projectId: "7kulyf0f", // Replace with your project ID
  dataset: "production_sanity", // Or your dataset name
  apiVersion: "2024-01-09", // Today's date or latest API version
  useCdn: false, // Disable CDN for real-time updates
  token:
    "skULNQOK7f62kVgViXCSD2a6p5NsIP51wiBq6VqES3BNxyhMijLUjHu27u8CiUQxZpEvV5l8KJmdX8mc5TefzSSJqZ93bRNKS4Wg9wMF9eNl3fdozTHFbZ4gk1kdUEt8d0L904JtDsqSKHEd4LBniGfbInzkmfxIn7UK2nxkHL5ptNzy4U1e",
});
