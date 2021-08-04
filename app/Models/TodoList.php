<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TodoList extends Model
{
    use HasFactory;
    protected $fillable = [
        'todo_name',
        "priority",
        'to_date',
        'details'
    ];


    public function TodoTasks(): HasMany{
        return $this->hasMany(TodoTasks::class);
    }

    public function User(){
        return $this->belongsTo(User::class);
    }
}
