<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DesignWeb extends Model
{
    use HasFactory;
    protected $table = 'design_webs';
    protected $filable = [
        'name',
        'firstname',
        'old',
        'email',
        'mobile',
        'filiere',
        'image'
    ];
}
