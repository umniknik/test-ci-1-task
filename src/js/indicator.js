export default function indicator(userOptions) {
  if (userOptions.health > 50) {
    return ('healthy');
  } if (userOptions.health < 15) {
    return ('critical');
  }
  return ('wounded');
}
