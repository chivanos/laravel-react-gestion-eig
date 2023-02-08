<?php

namespace App\Http\Controllers\PDF;

use Barryvdh\DomPDF\PDF;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;



class BulletinContoller extends Controller
{
    public function index()
    {
        
        $data = [
            'title' => 'Welcome to Tutsmake.com',
            'date' => date('m/d/Y')
        ];
           
        $pdf = PDF::loadView('emploi', $data);
     
        return $pdf->download('Bulletin.pdf');
    }
}




// class BulletinContoller extends Controller
// {
//     public function index()
//     {
//         $data = [
//             'title' => 'Welcome to Tutsmake.com',
//             'date' => date('m/d/Y')
//         ];
           
//         $pdf = PDF::loadView('emploi', $data);
     
//         return $pdf->download('Bulletin.pdf');
//     }
// }
