import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './bio-modal.component.html'
})
export class NgbdBioModalContent {

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './skills-modal.component.html'
})
export class NgbdSkillsModalContent {

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './hobbies-modal.component.html'
})
export class NgbdHobbiesModalContent {

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './contact-modal.component.html'
})
export class NgbdContactModalContent {

  constructor(public activeModal: NgbActiveModal) {}
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

constructor(private modalService: NgbModal) {}

  displayBio () {
      //document.getElementById("bio").innerHTML = '<p><b> Hey Everyone,</b><br>I am Tanvir Bashar and I am</p>';
      const modalRef = this.modalService.open(NgbdBioModalContent, { size: 'lg' });
      modalRef.componentInstance.name = 'World';

  }

  displaySkills() {
    const modalRef = this.modalService.open(NgbdSkillsModalContent, { size: 'lg' });
    modalRef.componentInstance.name = 'World';
  }

  displayHobbies(){
    const modalRef = this.modalService.open(NgbdHobbiesModalContent, { size: 'lg' });
    modalRef.componentInstance.name = 'World';
  }

  displayContact(){
    const modalRef = this.modalService.open(NgbdContactModalContent, { size: 'lg' });
    modalRef.componentInstance.name = 'World';
}
}
