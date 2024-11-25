import { useState, useEffect } from 'react';
import './styles.css';

export function CreateButton(){
    return (
        <div>
            <button class="toggle-menu">
                <div class="icon">
                    <i class="fa-light fa-hexagon-nodes fa-xl" style="color: #e5e6eb;"></i>
                </div>
                <div class="text">Create</div>
            </button>
        </div>
    );
}