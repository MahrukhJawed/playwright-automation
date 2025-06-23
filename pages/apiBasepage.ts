
 
class ApiBasePage {

// Applies overrides to a base object and returns the updated object.
// If overrides are not an object, returns them as is.
  
  async highlightOverrides(base: any, overrides: any) {
      if (typeof overrides !== 'object' || overrides === null) {
          return overrides;
      }

      const highlighted: Record<string, any> = {};
      for (const key in overrides) {
          if (typeof overrides[key] === 'object') {
              highlighted[key] = JSON.parse(JSON.stringify(overrides[key]));
          } else {
              highlighted[key] = overrides[key];
          }
      }
      return highlighted;
  }
}

export default ApiBasePage;