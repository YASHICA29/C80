name_student_array=[];

function submit(){
    var display_student_array=[];

    for(var j=1;j<=4;j++){
        var name_student=document.getElementById("name_of_the_student_"+j).value ;
        name_student_array.push(name_student);
    }
    var lenght_student=name_student_array.length;
    for(var k=0;k<lenght_student;k++){
        display_student_array.push("<h4>name- "+name_student_array[k]+"</h4>");
        document.getElementById("display_name_with_commas").innerHTML=display_student_array
    }
        var remove_commas=display_student_array.join(" ");
        document.getElementById("display_name_without_commas").innerHTML=remove_commas

        document.getElementById("submit_button").style.display="none";
        document.getElementById("sort_button").style.display="inline-block";
    
}

function sorting(){
    name_student_array.sort();
    var display_student_array_sorting=[];
    var lenght_student=name_student_array.length;
    for(var k=0;k<lenght_student;k++){
        display_student_array_sorting.push("<h4>name- "+name_student_array[k]+"</h4>");
    
    }
    var remove_commas=display_student_array_sorting.join(" ");
        document.getElementById("display_name_without_commas").innerHTML=remove_commas
}