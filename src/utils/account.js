const byteArray2hexStr = require("./bytes").byteArray2hexStr;
const base64EncodeToString = require("../lib/code").base64EncodeToString;
const {genPriKey, getAddressFromPriKey} = require("./crypto");

/**
 * Generate a new account
 */
function generateAccount() {
  let priKeyBytes = genPriKey();
  let addressBytes = getAddressFromPriKey(priKeyBytes);
  let address = byteArray2hexStr(addressBytes);
  let password = base64EncodeToString(priKeyBytes);
  let privateKey = byteArray2hexStr(priKeyBytes);

  return {
    privateKey,
    address,
    password,
  }
}

module.exports = {
  generateAccount,
};