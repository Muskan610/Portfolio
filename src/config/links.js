import yaml from 'js-yaml';
import linksYaml from './links.yaml?raw';

// Parse YAML file
const links = yaml.load(linksYaml);

export default links;
