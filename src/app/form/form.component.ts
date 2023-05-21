import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CadService } from '../cad.service';
import { Estudante } from '../estudantes';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  estudantes : Estudante[] = [];
  formGroupClient: FormGroup;

  constructor(private cadService: CadService,
    private formBuilder: FormBuilder
    ){
      this.formGroupClient = formBuilder.group({
        id : [''],
        nome : [''],
        idade : [''],
        faltas : [''],
        email : ['']
    });
    }



  ngOnInit(): void {
    this.loadEstudante();
  }

  loadEstudante(){
      this.cadService.getEstudantes().subscribe(
        {
          next: data => this.estudantes = data,
          error:(msg) => console.log("Erro ao chamar o endpoint" + msg)
        }
      )
  }

  save(){
    this.cadService.save(this.formGroupClient.value).subscribe({
      next: data => {
        this.estudantes.push(data);
        this.formGroupClient.reset();
      }
  })
  }

}
