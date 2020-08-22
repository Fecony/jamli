// Read more about tsdx rollup config customization at https://tsdx.io/customization#rollup
module.exports = {
  rollup(config, options) {
    // Change input file and default exports for umd to export jamli by default
    if (config.output.format === 'umd') {
      config.input = 'src/jamli.ts';
      config.output.exports = 'default';
    }
    return config;
  },
};
