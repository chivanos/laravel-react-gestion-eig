<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MontageVideo extends Model
{
    use HasFactory;
    protected $table = 'montage_videos';
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
