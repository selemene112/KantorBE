const registerKontakPicRepository = async (data, id, prisma) => {
  try {
    const kontakpicdata = await prisma.Kontak.create({
      data: {
        idSite: id,
        namaPic: data.namaPic,

        noTelpon: data.noTelpon,
      },
    });
    return kontakpicdata;
  } catch (error) {
    console.log("ini error dari repo", error);
    throw new Error(error);
  }
};

const getAllKontakPicRepository = async () => {
  try {
    const kontakpicdata = await prisma.Kontak.findMany();
    return kontakpicdata;
  } catch (error) {
    console.log("ini error dari repo", error);
    throw new Error(error);
  }
};

const getByidKontakPicRepository = async (id) => {
  try {
    const kontakpicdata = await prisma.Kontak.findUnique({
      where: {
        idSite: id,
      },
    });
    return kontakpicdata;
  } catch (error) {
    console.log("ini error dari repo", error);
    throw new Error(error);
  }
};

const updateKontakPicRepository = async (id, data) => {
  try {
    const kontakpicdata = await prisma.Kontak.update({
      where: {
        idSite: id,
      },
      data: {
        namaPic: data.namaPic,
        noTelpon: data.noTelpon,
      },
    });
    return kontakpicdata;
  } catch (error) {
    console.log("ini error dari repo", error);
    throw new Error(error);
  }
};

const deleteKontakPicRepository = async (id) => {
  try {
    const kontakpicdata = await prisma.Kontak.delete({
      where: {
        idSite: id,
      },
    });
    return kontakpicdata;
  } catch (error) {
    console.log("ini error dari repo", error);
    throw new Error(error);
  }
};

module.exports = {
  registerKontakPicRepository,
  getAllKontakPicRepository,
  getByidKontakPicRepository,
  updateKontakPicRepository,
  deleteKontakPicRepository,
};
