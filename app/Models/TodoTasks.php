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
        "to_date"
    ];


    public function TodoLists(){
        $this->belongsTo(TodoLists::class);
    }
}
