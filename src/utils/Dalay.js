
export default class Dalay{

    static wait(seconds) {
      return new Promise((resolve) => { setTimeout(resolve, seconds * 1000); });
    }
}