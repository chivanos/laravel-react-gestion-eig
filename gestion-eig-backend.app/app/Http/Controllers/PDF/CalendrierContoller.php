<?php

namespace App\Http\Controllers\PDF;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use PDF;


class CalendrierContoller extends Controller
{
    public function index()
    {
        $data = [
            'title' => 'Bonjour',
            'date' => date('m/d/Y')
        ];
           
        $pdf = PDF::loadView('emploi', $data);
     
        return $pdf->download('Calendrier.pdf');
    }
}

