/* STEP 1: Creating Strings */
    let step1a = 'This is "a" string';
    console.log(step1a);

    
    // Note - whether you use 'single' or "double" quotes is a personal preference - try to be consistent

    /* STEP 2: Escaping Characters */
    let step2 = 'It\'s six O\' clock';
    output.textContent = step2;

    /* STEP 3: Concatenation */
    let step3a = 'Js';
    let step3b = 'rocks';
    output.textContent = step3a + ' ' + step3b;

    /* STEP 4: Numbers and Strings */
    let step4a = 'Faranheit' + 543;
    output.textContent = step4a + ' ' + typeof(step4a);

    // numbers can be converted to strings
    let step4b = '20' + '18';
    output.textContent = step4b + ' ' + typeof(step4b);

    // strings can be converted to numbers, too
    let 
    // and back again, if we want