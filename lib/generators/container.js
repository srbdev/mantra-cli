import {
  _generate, _generateTest, ensureModuleNameProvided, ensureModuleExists,
  removeFromIndexFile, removeFile, getOutputPath, getTestOutputPath
} from './utils';

export function generateContainer(name, options) {
  let [moduleName, entityName] = name.split(':');

  ensureModuleNameProvided(name);
  ensureModuleExists(moduleName);

  _generate('container', moduleName, entityName, options);
  _generateTest('container', moduleName, entityName);

  _generate('component', moduleName, entityName, options);
  _generateTest('component', moduleName, entityName);
}

export function destroyContainer(name) {
  let [moduleName, entityName] = name.split(':');

  removeFile(getOutputPath('container', entityName, moduleName));
  removeFile(getTestOutputPath('container', entityName, moduleName));

  removeFile(getOutputPath('component', entityName, moduleName));
  removeFile(getTestOutputPath('component', entityName, moduleName));
}
