m('.about content-center',[
  m('h1','Palindrome'),
  m('hr'),
  m('form.btn-group[role="group"][onsubmit={u.silence()}]',[
    m('.col-md-4',[
      m('label.content-center','Word to be Checked'),
      m('.input-group', [
        m('input#text_tempo.form-control',{placeholder:"Write...",onkeyup:ctrl.palindrome})
      ])
    ])
  ]),
  m('hr'),
  ctrl.valores
])