const del = require('del');

const cleanModule = async () => {
    const deletedPaths = await del(['dist']);
};

module.exports = cleanModule;
