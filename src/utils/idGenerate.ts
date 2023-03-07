function idGenerate(): string {
  let result = "";

  const letters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
  const numbers = Math.floor((Math.random() + 1) * 100);
  const maxPosition = letters.length - 1;

  for (let i = 0; i < 2; ++i) {
    const position = Math.floor(Math.random() * maxPosition);
    result = result + numbers + letters.substring(position, position + 1);
  }

  return "#" + result;
}

export default idGenerate;
