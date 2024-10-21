export const getParameters = (data) => {
    const uniqueZones = new Set();
    const uniqueCenterTypes = new Set();
    const uniqueServices = new Set();
    const uniqueStates = new Set();
  
    data.forEach((center) => {
      const zone = center.zone;
      const centerType = center.centerType;
      const services = center.services;
      const state = center.state ? center.state : 'No Especificado'
  
      if (zone) uniqueZones.add(zone);
      if (centerType) uniqueCenterTypes.add(centerType);
      if (services) {
        for (const serviceKey in services) {
          uniqueServices.add(serviceKey);
        }
      }
      if (state) uniqueStates.add(state);
    });
    console.log(Array.from(uniqueStates));
  
    return {
      uniqueZones: Array.from(uniqueZones),
      uniqueCenterTypes: Array.from(uniqueCenterTypes),
      uniqueServices: Array.from(uniqueServices),
      uniqueStates: Array.from(uniqueStates)
    };
  };
  