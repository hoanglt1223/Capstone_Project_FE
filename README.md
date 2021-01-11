go to node_modules/react-scripts/scripts/utils/verifyTypeScriptSetup.js


let result;
    parsedTsConfig = immer(readTsConfig, config => {
      result = ts.parseJsonConfigFileContent(
        config,
        ts.sys,
        path.dirname(paths.appTsConfig)
      );
    });

with

parsedTsConfig = {...readTsConfig};

    const result = ts.parseJsonConfigFileContent(
      parsedTsConfig,
      ts.sys,
      path.dirname(paths.appTsConfig)
    );