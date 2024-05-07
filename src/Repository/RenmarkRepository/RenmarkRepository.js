const registerRenmarkRepository = async (data, id, prisma) => {
  try {
    const RenmarkData = await prisma.renmark.create({
      data: {
        idSite: id,
        message: data.message,
      },
    });
    return RenmarkData;
  } catch (error) {
    console.log("ini error dari repo", error);
    throw new Error(error);
  }
};

const getAllRenmarkRepository = async (id, prisma) => {
  try {
    const renmark = await prisma.renmark.findMany({
      where: {
        idSite: id,
      },
    });
    return renmark;
  } catch (error) {
    console.log("ini error dari repo", error);
    throw new Error(error);
  }
};

const getByIdRenmarkRepository = async (id, prisma) => {
  try {
    const renmark = await prisma.renmark.findMany({
      where: {
        idSite: id,
      },
    });
    return renmark;
  } catch (error) {
    console.log("ini error dari repo", error);
    throw new Error(error);
  }
};

const editRenmarkByIdRepository = async (data, id, prisma) => {
  try {
    const RenmarkData = await prisma.renmark.update({
      where: {
        id: id,
      },
      data: {
        message: data.message,
      },
    });
    return RenmarkData;
  } catch (error) {
    console.log("ini error dari repo", error);
    throw new Error(error);
  }
};

// Delet renmark by id
/*
this will delete renmark by id 
example : 

1 site have several renmark and user need delete 1 renmark on atribut site use id 

*/
const deleteRenmarkRepository = async (id, prisma) => {
  try {
    const renmark = await prisma.renmark.delete({
      where: {
        id: id,
      },
    });
    return renmark;
  } catch (error) {
    console.log("ini error dari repo", error);
    throw new Error(error);
  }
};

// delete all renmark site
/* 
this will delete all renmark on site
example :

1 site have several renmark and user need delete all renmark on atribut site use id
*/
const deleteAllRenmarkSite = async (id, prisma) => {
  try {
    const renmark = await prisma.renmark.deleteMany({
      where: {
        idSite: id,
      },
    });
    return renmark;
  } catch (error) {
    console.log("ini error dari repo", error);
    throw new Error(error);
  }
};
module.exports = {
  registerRenmarkRepository,
  getAllRenmarkRepository,
  getByIdRenmarkRepository,
  deleteRenmarkRepository,
  deleteAllRenmarkSite,
  editRenmarkByIdRepository,
};
