function CourseService() {
    return {
        courseList: [],
        insert: function(course) {
            this.courseList.push(course);
        },
        getAll: function() {
            return this.courseList;

        },
        getById: function(id) {
            for (var i = 0; i < this.courseList.length; i++) {
                var course = courseList[i];
                if (course.id == id) {
                    return course;
                }
            }
            return null;
        },
        count: function() {
            return this.courseList.length;
        },
        insertId: function() {
            var size = this.count();
            return (size == 0) ? 1 : this.courseList[size - 1].id + 1;
        },
        getByIndex: function(index) {
            return this.courseList[index];
        }
    }
}