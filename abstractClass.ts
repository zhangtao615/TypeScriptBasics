//抽象类 abstract 抽象类只能被继承不能被实例化  把一些类的共性抽出来

abstract class Geom {
 abstract getArea (): number
}

class Circle extends Geom {
  getArea () {
    return 123
  }
}