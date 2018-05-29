const guid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
}

const findIndex = (id, data) => {
  return data.findIndex(item => item.id === id);
}

module.exports = {
  guid,
  findIndex
}