// definir le type student
export default class StudentModel {
  constructor(id,nom, pren, email, avatar, isPresent) {
    this.id = id;
    this.nom = nom;
    this.pren = pren;
    this.email = email;
    this.avatar = avatar;
    this.isPresent = isPresent;
  }
}
