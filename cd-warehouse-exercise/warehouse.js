class Warehouse {
  constructor(cdList) {
    this.cdList = cdList;
  }

  getCdIndex(searchedCD) {
    return this.cdList.findIndex(cd => cd.title === searchedCD.title && cd.artist === searchedCD.artist);
  }

  add(addedCD) {
    let existingCdIndex = this.getCdIndex(addedCD);
    
    if(existingCdIndex >= 0) {
      this.cdList[existingCdIndex].quantity += 1;
    } else {
      this.cdList = [
        ...this.cdList,
        {
          ...addedCD,
          quantity: 1
        }
      ];
    }
  }

  remove(removedCD) {
    let existingCdIndex = this.getCdIndex(removedCD);

    if(this.cdList[existingCdIndex].quantity > 1) {
      this.cdList[existingCdIndex].quantity -= 1;
    } else {
      this.cdList.splice(existingCdIndex, 1);
    }
  }

  getCdCollection() {
    return [...this.cdList];
  }
}

module.exports = Warehouse;