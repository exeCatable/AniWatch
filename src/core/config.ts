export const config = {
    proxyUrl: "",
    encryptedClientId:
        "U2FsdGVkX1/RPPBUzns7VzAVnbzsOZXr8Y7JLLVbNEZ1MaeDWaLfkPQWQUF9E3O+3Bxu9NADtT4YMm3fYThw5g==",
    encryptedClientSecret:
        "U2FsdGVkX18luhw/YIfjgSz+eRTzeUlegqwdQudsqkmyhQt9n6f0apnpv9VENpD/BG6CGLBsqV//xr2KKEGZLzArOMaUwgKZONMqk1siN5lnI6lRT8jZL5Vi0s01WiFq",
};

if (process.env["NODE_ENV"] === "development") {
    config.proxyUrl = "http://localhost:3001";
} else {
    config.proxyUrl = "https://xyz.de";
}