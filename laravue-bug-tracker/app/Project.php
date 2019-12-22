<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'name',
        'version',
        'type',
        'os',
        'description',
        'development_start',
        'release_date',
    ];
}
