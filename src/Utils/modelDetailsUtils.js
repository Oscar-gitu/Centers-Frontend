export function convertServices(data) {
  const serviceNames = Object.keys(data.services);

  return serviceNames.join(", ");
}
