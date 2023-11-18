export default {
    clearMocks: true,
    collectCoverage: false,
    coverageDirectory: "coverage",
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    testMatch: ["**/*.test.ts", "**/*.test.tsx"],
    testEnvironment: "jest-environment-jsdom",
    transform: { 
      //"^.+\\.(ts|tsx)$": ["esbuild-jest", { sourcemap: true }]
      "^.+\\.(ts|tsx)$": "ts-jest",
    },
    setupFilesAfterEnv: ["./jest.setup.ts", "./src/setupTests.ts"],
    reporters: [
      "default",
      [
        "jest-html-reporters",
        {
          publicPath: "__reports__",
          filename: "jest.html",
        },
      ],
    ],
    transformIgnorePatterns: [
      "/node_modules/",
    ],
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy" // スタイルシートモジュールのモック
    },
  };
  