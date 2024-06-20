// Import require.context from webpack
import "./style.scss"
const requireContext = require.context('.', false, /\.jsx$/);

// Create an object to store the imports
const components = {};

// Iterate over each file and import it
requireContext.keys().forEach((filename) => {
  const componentName = filename.replace('./', '').replace('.jsx', '');
  components[componentName] = requireContext(filename).default;
});

// Export all components
export default components;
