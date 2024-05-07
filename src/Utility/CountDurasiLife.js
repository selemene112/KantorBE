const countDurasiLife = (status, durasi, editTime) => {
  const currentTime = Date.now();
  const updatedAt = new Date(editTime).getTime();
  const duration = currentTime - updatedAt + durasi;

  const minutes = Math.floor((duration / (1000 * 60)) % 60);
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  switch (status) {
    case "Open":
      return ` ${hours} Hours : ${minutes} minutes Site Down `;

    case "Close":
      return ` ${hours} Hours : ${minutes} minutes Site Up `;

    case "On_Progress":
      return ` ${hours} Hours : ${minutes} minutes Site in the Works `;

    default:
      return "Your Input is not valid";
  }
};

module.exports = { countDurasiLife };
