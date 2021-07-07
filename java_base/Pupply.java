public class Pupply {
  int age = 1;
  public Pupply(String name) {
    System.out.println("name is: " + name );
  }

  public void setAge(int age) {
    this.age = age;
  }

  public int getAge() {
    return this.age;
  }

  public static void main(String[] args) {
    System.out.println("main");
    Pupply myPupply =  new Pupply("xbei");
    myPupply.setAge(4);
    int newAge = myPupply.getAge();
    System.out.println(newAge);
  }
}
