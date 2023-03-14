import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();


$(function() {

	/*Modal*/
    
    const modalCall = $("[data-modal]");
	const modalClose = $("[data-close]");

    modalCall.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

        setTimeout(function() {
            $(modalId).find(".modal__dialog").css({
                transform: "scale(1)"
            });
        }, 200);

    });

	modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        
        modalParent.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function() {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });


    $(".modal").on("click", function(event) {
        let $this = $(this);

        $this.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function() {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);

    });

    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    });

    /* Редактировать проект */    
    let textArea = document.getElementById("textbox");
    let characterCounter = document.getElementById("char_count");
    const maxNumOfChars = 100;

    const countCharacters = () => {
        let numOfEnteredChars = textArea.value.length;
        let counter = maxNumOfChars - numOfEnteredChars;
        characterCounter.textContent = counter + "/100";
    };

    textArea.addEventListener("input", countCharacters);

    /* Добавить проект */
    let textArea1 = document.getElementById("textbox1");
    let characterCounter1 = document.getElementById("char_count1");
    const maxNumOfChars1 = 100;

    const countCharacters1 = () => {
        let numOfEnteredChars = textArea1.value.length;
        let counter = maxNumOfChars1 - numOfEnteredChars;
        characterCounter1.textContent = counter + "/100";
    };

    textArea1.addEventListener("input", countCharacters1);

    /* Редактировать категорию */
    let textArea2 = document.getElementById("textbox2");
    let characterCounter2 = document.getElementById("char_count2");
    const maxNumOfChars2 = 100;

    const countCharacters2 = () => {
        let numOfEnteredChars = textArea2.value.length;
        let counter = maxNumOfChars2 - numOfEnteredChars;
        characterCounter2.textContent = counter + "/100";
    };

    textArea2.addEventListener("input", countCharacters2);

    /* Редактировать категорию */
    let textArea3 = document.getElementById("textbox3");
    let characterCounter3 = document.getElementById("char_count3");
    const maxNumOfChars3 = 100;

    const countCharacters3 = () => {
        let numOfEnteredChars = textArea3.value.length;
        let counter = maxNumOfChars3 - numOfEnteredChars;
        characterCounter3.textContent = counter + "/100";
    };

    textArea3.addEventListener("input", countCharacters3);

    /* Открытьдоступ к категории */
    let textArea4 = document.getElementById("textbox4");
    let characterCounter4 = document.getElementById("char_count4");
    const maxNumOfChars4 = 100;

    const countCharacters4 = () => {
        let numOfEnteredChars = textArea4.value.length;
        let counter = maxNumOfChars4 - numOfEnteredChars;
        characterCounter4.textContent = counter + "/100";
    };

    textArea4.addEventListener("input", countCharacters4);

    /* Создать  пароль */
    let textArea5 = document.getElementById("textbox5");
    let characterCounter5 = document.getElementById("char_count5");
    const maxNumOfChars5 = 100;

    const countCharacters5 = () => {
        let numOfEnteredChars = textArea5.value.length;
        let counter = maxNumOfChars5 - numOfEnteredChars;
        characterCounter5.textContent = counter + "/100";
    };

    textArea5.addEventListener("input", countCharacters5);

    /* Редактировать  пароль */
    let textArea6 = document.getElementById("textbox6");
    let characterCounter6 = document.getElementById("char_count6");
    const maxNumOfChars6 = 100;

    const countCharacters6 = () => {
        let numOfEnteredChars = textArea6.value.length;
        let counter = maxNumOfChars6 - numOfEnteredChars;
        characterCounter6.textContent = counter + "/100";
    };

    textArea6.addEventListener("input", countCharacters6);

});

/*============================================= 
    Валидация ====================================*/ 

/* Редактировать проект */ 
(function(){
    function validation() {
        (() => {    
            const validation = new JustValidate('.form', {
                errorFieldCssClass:'is-invalid',
                errorLabelStyle: {
                    color: 'red',
                    fontWeight: '400',
                    fontSize: '12px',
                    lineHeight: '16px',
                    marginleft: '15px'
                },
                focusInvalidField: true,
                lockForm: true
            });

            validation.
            addField('#name',[
                {
                    rule: 'required',
                    errorMessage: 'Это поле необходимо заполнить!'
                }
            ])
            .onSuccess((ev) => {
                ev.preventDefault();
                window.showNotification();
            });

        })();
    }

    window.validation=validation;

})();

validation();

/* Добавить проект */ 
(function(){
    function validation() {
        (() => {    
            const validation = new JustValidate('#form-add', {
                errorFieldCssClass:'is-invalid',
                errorLabelStyle: {
                    color: 'rgba(209, 22, 22, 1)',
                    fontWeight: '400',
                    fontSize: '12px',
                    lineHeight: '16px',
                    marginleft: '15px'
                },
                focusInvalidField: true,
                lockForm: true
            });

            validation.
            addField('#name1',[
                {
                    rule: 'required',
                    errorMessage: 'Это поле необходимо заполнить!'
                }
            ])
            .onSuccess((ev) => {
                ev.preventDefault();
                window.showNotification();
            });

        })();
    }

    window.validation=validation;

})();

validation();


/* Создать раздел */ 
(function(){
    function validation() {
        (() => {    
            const validation = new JustValidate('#form-add2', {
                errorFieldCssClass:'is-invalid',
                errorLabelStyle: {
                    color: 'rgba(209, 22, 22, 1)',
                    fontWeight: '400',
                    fontSize: '12px',
                    lineHeight: '16px',
                    marginleft: '15px'
                },
                focusInvalidField: true,
                lockForm: true
            });

            validation.
            addField('#name2',[
                {
                    rule: 'required',
                    errorMessage: 'Это поле необходимо заполнить!'
                }
            ])
            .onSuccess((ev) => {
                ev.preventDefault();
                window.showNotification();
            });

        })();
    }

    window.validation=validation;

})();

validation();

/* Редактировать категорию */ 
(function(){
    function validation() {
        (() => {    
            const validation = new JustValidate('#form-add3', {
                errorFieldCssClass:'is-invalid',
                errorLabelStyle: {
                    color: 'rgba(209, 22, 22, 1)',
                    fontWeight: '400',
                    fontSize: '12px',
                    lineHeight: '16px',
                    marginleft: '15px'
                },
                focusInvalidField: true,
                lockForm: true
            });

            validation.
            addField('#name3',[
                {
                    rule: 'required',
                    errorMessage: 'Это поле необходимо заполнить!'
                }
            ])
            .onSuccess((ev) => {
                ev.preventDefault();
                window.showNotification();
            });

        })();
    }

    window.validation=validation;

})();

validation();

/* Создать категорию */ 
(function(){
    function validation() {
        (() => {    
            const validation = new JustValidate('#form-add4', {
                errorFieldCssClass:'is-invalid',
                errorLabelStyle: {
                    color: 'rgba(209, 22, 22, 1)',
                    fontWeight: '400',
                    fontSize: '12px',
                    lineHeight: '16px',
                    marginleft: '15px'
                },
                focusInvalidField: true,
                lockForm: true
            });

            validation.
            addField('#name4',[
                {
                    rule: 'required',
                    errorMessage: 'Это поле необходимо заполнить!'
                }
            ])
            .onSuccess((ev) => {
                ev.preventDefault();
                window.showNotification();
            });

        })();
    }

    window.validation=validation;

})();

validation();

/* Открыть доступ к категории */ 
(function(){
    function validation() {
        (() => {    
            const validation = new JustValidate('#form-add5', {
                errorFieldCssClass:'is-invalid',
                errorLabelStyle: {
                    color: 'rgba(209, 22, 22, 1)',
                    fontWeight: '400',
                    fontSize: '12px',
                    lineHeight: '16px',
                    marginleft: '15px'
                },
                focusInvalidField: true,
                lockForm: true
            });

            validation.
            addField('#name5',[
                {
                    rule: 'required',
                    errorMessage: 'Это поле необходимо заполнить!'
                }
            ])
            .onSuccess((ev) => {
                ev.preventDefault();
                window.showNotification();
            });

        })();
    }

    window.validation=validation;

})();

validation();

/* Создать пароль */ 
(function(){
    function validation() {
        (() => {    
            const validation = new JustValidate('#form-password', {
                errorFieldCssClass:'is-invalid',
                errorLabelStyle: {
                    color: 'rgba(209, 22, 22, 1)',
                    fontWeight: '400',
                    fontSize: '12px',
                    lineHeight: '16px',
                    marginleft: '15px'
                },
                focusInvalidField: true,
                lockForm: true
            });

            validation.
            addField('#name6',[
                {
                    rule: 'required',
                    errorMessage: 'Это поле необходимо заполнить!'
                }
            ])
            .addField('#login',[
                {
                    rule: 'required',
                    errorMessage: 'Это поле необходимо заполнить!'
                }
            ])
            .addField('#password',[
                {
                    rule: 'required',
                    errorMessage: 'Это поле необходимо заполнить!'
                }
            ])
            .addField('#url',[
                {
                    rule: 'required',
                    errorMessage: 'Это поле необходимо заполнить!'
                }
            ])
            .onSuccess((ev) => {
                ev.preventDefault();
                window.showNotification();
            });

        })();
    }

    window.validation=validation;

})();

validation();

/* Редактировать пароль */ 
(function(){
    function validation() {
        (() => {    
            const validation = new JustValidate('#form-password-red', {
                errorFieldCssClass:'is-invalid',
                errorLabelStyle: {
                    color: 'rgba(209, 22, 22, 1)',
                    fontWeight: '400',
                    fontSize: '12px',
                    lineHeight: '16px',
                    marginleft: '15px'
                },
                focusInvalidField: true,
                lockForm: true
            });

            validation.
            addField('#name6',[
                {
                    rule: 'required',
                    errorMessage: 'Это поле необходимо заполнить!'
                }
            ])
            .addField('#login1',[
                {
                    rule: 'required',
                    errorMessage: 'Это поле необходимо заполнить!'
                }
            ])
            .addField('#password1',[
                {
                    rule: 'required',
                    errorMessage: 'Это поле необходимо заполнить!'
                }
            ])
            .addField('#url1',[
                {
                    rule: 'required',
                    errorMessage: 'Это поле необходимо заполнить!'
                }
            ])
            .onSuccess((ev) => {
                ev.preventDefault();
                window.showNotification();
            });

        })();
    }

    window.validation=validation;

})();

validation();