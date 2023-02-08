<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeveloppementWeb extends Model
{
    use HasFactory;
    protected $table = 'developpement_webs';
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
