var courseService = new CourseService();




function $(key) {
    return document.getElementById(key);
}

$('add-btn').onclick = () => {
    $('dialog').style.display = 'block';
}

$('cancel-btn').onclick = () => {
    $('dialog').style.display = 'none';
}

$('save-btn').onclick = () => {
    var course = new Course();
    course.id = courseService.insertId();
    course.name = $('course_name').value;
    course.fees = $('course_fee').value;
    course.status = $('status').checked;
    courseService.insert(course);
    document.forms["course-form"].reset();
    $('dialog').style.display = 'none';
    populateCourses();
    return false;
}


function populateCourses() {
    var content = '<ul>';
    for (var i = 0; i < courseService.count(); i++) {
        var course = courseService.getByIndex(i);
        content += '<li>' + course.id + ' ' + course.name + '</li>';

    }
    content += "</ul>";
    $("course-list").innerHTML = content;
}