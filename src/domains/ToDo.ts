export class ToDo {
  id: string;
  title: string;
  status: string;
  startDay: Date;
  completeDay: Date;
  createAt: string;
  updateAt: string;

  constructor(
    id: string, 
    title: string,
    status: string,
    startDay: Date,
    completeDay: Date,
    createAt: string,
    updateAt: string    
    ) {
    this.id = id;
    this.title = title;
    this.status = status;
    this.startDay = startDay;
    this.completeDay = completeDay;
    this.createAt = createAt;
    this.updateAt = updateAt;
  }
}