<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bug extends Model
{
    public function project()
    {
        return $this->belongsTo(Project::class);
    }
    /**
     * the User(customer/admin) this bug have beeen reported by
     */
    public function addedBy()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
    /**
     *  the User(Developer) this Bug have been assigned
     */
    public function assignedTo()
    {
        return $this->belongsTo(User::class, 'assigned_to', 'id');
    }
}
