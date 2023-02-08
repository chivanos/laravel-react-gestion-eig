<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DesignGraphique extends Model
{
    use HasFactory;
    protected $table = 'design_graphiques';
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
