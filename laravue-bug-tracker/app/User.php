<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function roles()
    {
        return $this->belongsToMany(Role::class)->withTimestamps();
    }
    /**
     * the Bugs this user have reported
     */
    public function bugsAdded()
    {
        return $this->hasMany(Bug::class, 'user_id', 'id');
    }
    /**
     * the Bugs this user have assigned to
     */
    public function bugsAssigned()
    {
        return $this->hasMany(Bug::class, 'assigned_to', 'id');
    }
    /**
     * the Comments this user made on a Bug
     */
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
