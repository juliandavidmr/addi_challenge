module.exports = {
    preset: "ts-jest",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    globals: {
        "ts-jest": {
            tsConfig: "tsconfig.jest.json"
        }
    }
};
