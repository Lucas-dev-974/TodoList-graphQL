<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TodoTasks extends Model
{
    use HasFactory;

    protected $fillable = [
        "todo_list_id",
        "task_name",
        "task_information",
        "checked",
    ];


    public function TodoLists(){
        $this->belongsTo(TodoList::class);
    }
}
