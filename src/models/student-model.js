export default class StudentModel {
  constructor(student, n = "", p = "", e = "", a = "", isP = false) {
    this.nom = student?.nom || n;
    this.pren = student?.pren || p;
    this.email = student?.email || e;
    this.avatar = student?.avatar || a;
    this.isPresent = student?.isPresent || isP;
  }
}
